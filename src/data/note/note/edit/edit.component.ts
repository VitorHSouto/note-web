import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Editor, Toolbar } from 'ngx-editor';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { NoteService } from 'src/services/note/note.service';
import { CreateNoteRequest, Note, defaultToolbarOptions } from 'src/services/note/note.types';

@Component({
  selector: 'note-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteEditComponent implements OnInit{

  constructor(
    private readonly _noteService: NoteService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {}

  note: Note;
  html = '';
  
  readonly _toolbar: Toolbar = defaultToolbarOptions;
  readonly _editor: Editor = new Editor();
  private readonly _destroySubject = new Subject<boolean>();
  private readonly _inputSubject = new Subject<string>();

  ngOnInit(): void {
    this.subscribeToRouteChanges();
    this.subscribeToInputChanges();
  }

  ngOnDestroy(): void {
    this._editor.destroy();
    this._destroySubject.next(true);
    this._destroySubject.unsubscribe();
  }

  contentChange(newContent: string): void{
    if(newContent === this.note.content)
      return;

    this._inputSubject.next(newContent);
  }

  private subscribeToInputChanges(): void{
    this._inputSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(content => this.updateNoteContent(content))
  }

  private updateNoteContent(newContent: string): void{
    const req: CreateNoteRequest = {
      title: this.note.title,
      content: newContent
    }

    this._noteService.update(this.note.id, req)
      .pipe( takeUntil(this._destroySubject) )
      .subscribe()
  }

  private subscribeToRouteChanges(): void{
    this._activatedRoute.data
      .subscribe(data => {
        this.note = data['note'] as Note;
        this.html = this.note.content;
        this._changeDetectorRef.markForCheck();
    });
  }

}
