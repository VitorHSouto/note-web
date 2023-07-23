import { Routes } from "@angular/router";
import { NoteComponent } from "./note/note.component";
import { NotesComponent } from "./notes.component";
import { NotesResolver } from "./notes.resolver";

export const noteRoutes: Routes = [
    {
      path: '',
      component: NotesComponent,
      children: [
        {
          path:'',
          component: NoteComponent,
          resolve: {
            notes: NotesResolver
          }
        }
      ]
    }
];