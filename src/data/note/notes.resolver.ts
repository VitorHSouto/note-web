import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { NoteService } from "src/services/note/note.service";
import { Note } from "src/services/note/note.types";

@Injectable({ providedIn: 'root' })
export class NotesResolver{
  constructor(private service: NoteService) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Note[]> {
    return this.service.list();
  }
}