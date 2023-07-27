import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/services/note/note.types';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {}

  isInEditionMode: boolean = false;

  ngOnInit(): void {
    this.subscribeToRouteChanges();
  }

  private bindNote(note: Note){
    this.isInEditionMode = note != null;
    this._changeDetectorRef.markForCheck();
  }

  private subscribeToRouteChanges(): void{
    this._activatedRoute.data
    .subscribe(data => {
      this.bindNote(data['note']);
    });
  }

}
