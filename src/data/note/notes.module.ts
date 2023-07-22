import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent as NotesComponent } from './notes.component';
import { RouterModule } from '@angular/router';
import { noteRoutes } from './notes.routing';
import { NoteComponent } from './note/note.component';
import { ListComponent } from './note/list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(noteRoutes)
  ]
})
export class NotesModule { }
