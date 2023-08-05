import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NgxEditorModule } from 'ngx-editor';
import { SharedModule } from '../shared/shared.module';
import { NoteEditComponent } from './note/edit/edit.component';
import { ListComponent as NoteListComponent } from './note/list/list.component';
import { NoteComponent } from './note/note.component';
import { NotesComponent } from './notes.component';
import { noteRoutes } from './notes.routing';

@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
    NoteListComponent,
    NoteEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(noteRoutes)
  ]
})
export class NotesModule { }
