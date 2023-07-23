import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateNoteRequest, Note } from './note.types';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private readonly _httpClient:  HttpClient
  ) { }

  get notes$() : Observable<Note[]> {
    return this._notes.asObservable();
  }

  private readonly _notes: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);

  readonly baseUrl: string = `${environment.apiUrl}/note`;

  list(): Observable<Note[]>{
    return this._httpClient.get<Note[]>(this.baseUrl)
      .pipe(tap(notes => this._notes.next(notes)))
  }

  save(req: CreateNoteRequest): Observable<Note>{
    return this._httpClient.post<Note>(this.baseUrl, req)
      .pipe(tap(note => {
        this.syncNotes(note);
      }))
  }

  private syncNotes(newNote: Note): void{
    debugger
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
