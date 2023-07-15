import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent as NotesComponent } from './notes.component';
import { RouterModule } from '@angular/router';
import { noteRoutes } from './notes.routing';
import { NoteComponent } from './note/note.component';
import { ListComponent } from './note/list/list.component';

@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(noteRoutes)
  ]
})
export class NotesModule { }
