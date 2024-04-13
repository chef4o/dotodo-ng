import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent {
  @Input() activeNoteId!: string;
  @Input() user!: IUser | null;
}