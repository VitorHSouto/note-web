import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateNoteRequest, Note } from './note.types';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private readonly _httpClient:  HttpClient
  ) { }

  readonly baseUrl: string = `${environment.apiUrl}/note`;

  get selectedNote$() : Observable<Note> {
    return this._selectedNote.asObservable();
  }

  private readonly _selectedNote: BehaviorSubject<Note> = new BehaviorSubject<Note>(null);

  get notes$() : Observable<Note[]> {
    return this._notes.asObservable();
  }

  private readonly _notes: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);

  private alreadyLoaded: boolean = false;

  list(reload: boolean = false): Observable<Note[]>{
    if(!reload && this.alreadyLoaded)
      return of(this._notes.value);

    return this._httpClient.get<Note[]>(this.baseUrl)
      .pipe(tap(notes => {  
        this.alreadyLoaded = true;
        this._notes.next(notes)
    }))
  }

  getById(id: string, reload: boolean = false): Observable<Note>{
    const hasCache = this._notes.value?.find(note => note.id == id);
    if(!reload && hasCache)
      return of(hasCache);

    return this._httpClient.get<Note>(`${this.baseUrl}/${id}`)
      .pipe(tap(note => {
        this._selectedNote.next(note);
        this.syncNotes(note);
      }))
  }

  save(req: CreateNoteRequest): Observable<Note>{
    return this._httpClient.post<Note>(this.baseUrl, req)
      .pipe(tap(note => this.syncNotes(note)))
  }

  update(id: string, req: CreateNoteRequest): Observable<Note>{
    return this._httpClient.put<Note>(`${this.baseUrl}/${id}`, req)
      .pipe(tap(note => this.syncNotes(note)))
  }

  private syncNotes(newNote: Note): void{
    const notes = this._notes.value;
    const oldNote = notes.find(note => note.id == newNote.id);

    if(oldNote)
      Object.assign(oldNote, newNote);
    else if(!oldNote && newNote.active)
      notes.push(newNote);

    const newNotes = notes.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    this._notes.next(newNotes);
  }
}
