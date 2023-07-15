import { Routes } from "@angular/router";
import { NotesComponent } from "./notes.component";
import { NoteComponent } from "./note/note.component";

export const noteRoutes: Routes = [
    {
      path: '',
      component: NotesComponent,
      children: [
        {
          path:'',
          component: NoteComponent
        }
      ]
    }
];