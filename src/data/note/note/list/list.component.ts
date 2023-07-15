import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NoteService } from 'src/services/note/note.service';
import { Note, NoteView } from 'src/services/note/note.types';

@Component({
  selector: 'note-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  constructor(
    private readonly _noteService: NoteService,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {}

  notes: NoteView[] = [];

  ngOnInit(): void {
    this.loadNotes();
  }

  private loadNotes(): void{
    moment.locale('pt-br');

    this._noteService.list()
      .pipe()
      .subscribe(notes => {
        this.notes = notes;
        this.notes.forEach(note => {
          const date = moment(note.updatedAt).fromNow();
          note.formattedDate = date;
        })

        this._changeDetectorRef.markForCheck();
      });
  }

}
