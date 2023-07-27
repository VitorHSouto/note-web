import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { NoteService } from "src/services/note/note.service";
import { Note } from "src/services/note/note.types";

@Injectable({ providedIn: 'root' })
export class NotesResolver {
  constructor(private _service: NoteService) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Note[]> {
    return this._service.list();
  }
}

@Injectable({ providedIn: 'root' })
export class NoteResolver {
  constructor(private _service: NoteService) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Note> {
    const id = route.paramMap.get('id');
    return this._service.getById(id);
  }
}