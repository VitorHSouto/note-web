import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Note } from './note.types';

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
}
