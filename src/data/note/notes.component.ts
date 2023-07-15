import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'note',
  templateUrl: './notes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent {

}
