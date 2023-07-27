import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'note-edit',
  templateUrl: './edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteEditComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
    
  }

}
