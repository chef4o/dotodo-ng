import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-profile-checklists',
  templateUrl: './profile-checklists.component.html',
  styleUrls: ['./profile-checklists.component.css']
})
export class ProfileChecklistsComponent {
  @Input() user!: IUser | null;
}
