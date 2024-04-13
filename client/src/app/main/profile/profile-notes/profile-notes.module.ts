import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileNotesComponent } from './profile-notes.component';
import { ProfileNoteComponent } from './profile-note/profile-note.component';
import { ProfileNoteDetailsComponent } from './profile-note-details/profile-note-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProfileNotesComponent, ProfileNoteComponent, ProfileNoteDetailsComponent],
  imports: [
    CommonModule
  ], 
  exports: [ProfileNotesComponent, RouterModule]
})
export class ProfileNotesModule { }
