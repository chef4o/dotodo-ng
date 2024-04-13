import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileRoutingModule } from './profile-routing.model';
import { ProfileChecklistsComponent } from './profile-checklists/profile-checklists.component';
import { ErrorHandlingModule } from 'src/app/shared/error-handling/error-handling.module';
import { ProfileNotesModule } from './profile-notes/profile-notes.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileDetailsComponent,
    ProfileChecklistsComponent,
  ],
  imports: [CommonModule, ProfileNotesModule, ErrorHandlingModule, ProfileRoutingModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
