import { Component, Input } from '@angular/core';
import { INote } from 'src/app/shared/interfaces/note';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-profile-notes',
  templateUrl: './profile-notes.component.html',
  styleUrls: ['./profile-notes.component.css'],
})
export class ProfileNotesComponent {
  activeNoteId = '';
  @Input() expiringNotes!: INote[] | null;
  @Input() user!: IUser | null;
}
