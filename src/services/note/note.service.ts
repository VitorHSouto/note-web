import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateNoteRequest, Note } from './note.types';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private readonly httpClient:  HttpClient
  ) { }

  readonly baseUrl: string = `${environment.apiUrl}/note`;

  list(): Observable<Note[]>{
    return this.httpClient.get<Note[]>(this.baseUrl)
      .pipe()
  }

  save(req: CreateNoteRequest): Observable<Note>{
    return this.httpClient.post<Note>(this.baseUrl, req)
      .pipe(tap(note => {
        this.syncNotes(note);
      }))
  }

  private syncNotes(note: Note): void{

  }
}
