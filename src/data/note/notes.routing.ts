import { Routes } from "@angular/router";
import { NoteComponent } from "./note/note.component";
import { NotesComponent } from "./notes.component";
import { NoteResolver, NotesResolver } from "./notes.resolver";

export const noteRoutes: Routes = [
    {
      path: '',
      component: NotesComponent,
      children: [
        {
          path: '',
          component: NoteComponent,
          resolve: {
            notes: NotesResolver
          }
        },
        {
          path: ':id',
          component: NoteComponent,
          resolve: {
            notes: NotesResolver,
            note: NoteResolver
          }
        }
      ]
    }
];