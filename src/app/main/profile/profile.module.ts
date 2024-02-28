import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileNotesComponent } from './profile-notes/profile-notes.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileDetailsComponent,
    ProfileNotesComponent,
  ],
  imports: [CommonModule],
  exports: [ProfileComponent, ProfileDetailsComponent, ProfileNotesComponent],
})
export class ProfileModule {}
