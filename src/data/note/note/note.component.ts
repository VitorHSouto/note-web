import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }

}
