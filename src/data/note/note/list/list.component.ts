import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subject, takeUntil } from 'rxjs';
import { NoteService } from 'src/services/note/note.service';
import { Note, NoteView, defaultCreateNoteRequest } from 'src/services/note/note.types';

type GroupOfNotes = {
  title?: string,
  notes: Note[]
}

@Component({
  selector: 'note-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  constructor(
    private readonly _noteService: NoteService,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {
    moment.locale('pt-br');
  }

  groupOfNotes: GroupOfNotes[] = [];

  private notes: NoteView[] = [];
  private mapNotes: Map<string, Note[]> = new Map<string, Note[]>();

  private readonly _destroySubject = new Subject<boolean>();
  private readonly today = new Date();

  ngOnInit(): void {
    this.subscribeToNotes();
  }

  addNote(): void{
    this._noteService.save(defaultCreateNoteRequest)
      .pipe(takeUntil(this._destroySubject))
      .subscribe(response => {
        console.log(response);
      })
  }

  private subscribeToNotes(): void{
    this._noteService.notes$
      .pipe()
      .subscribe(notes => this.bindNotes(notes));
  }

  private bindNotes(notes: Note[]): void{
    this.groupOfNotes = []
    this.mapNotes = new Map<string, Note[]>();    
    debugger

    const allNotes = notes ?? [];
    this.notes = allNotes.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

    this.notes.forEach(note => {
      const date = new Date(note.updatedAt);
      
      const formattedDate = moment(date).fromNow();
      note.formattedDate = formattedDate;
      
      if(date.toLocaleDateString() === this.today.toLocaleDateString())
        this.setNoteMap("Hoje", note);
      else
        this.setNoteMap(formattedDate, note);
    })
      
    this.mapNotes.forEach((value: Note[], key: string) => {
      this.groupOfNotes.push({
        title: key,
        notes: value
      });
    });

    console.log(this.groupOfNotes);
    this._changeDetectorRef.markForCheck();
  }

  private setNoteMap(key: string, value: Note): void{
    const currentValue = this.mapNotes.get(key) ?? [];
    currentValue.push(value);
    this.mapNotes.set(key, currentValue)
  }

}
