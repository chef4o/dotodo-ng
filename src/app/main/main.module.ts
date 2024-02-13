import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { NotesComponent } from './notes/notes.component';
import { EmptyNoteComponent } from './notes/empty-note/empty-note.component';
import { NoteItemComponent } from './notes/note-item/note-item.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { TaskTypeComponent } from './home/task-type/task-type.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { ProfileNotesComponent } from './profile/profile-notes/profile-notes.component';
import { ChecklistsComponent } from './checklists/checklists.component';
import { ChecklistComponent } from './checklists/checklist/checklist.component';
import { ChecklistItemComponent } from './checklists/checklist/checklist-item/checklist-item.component';
import { EmptyChecklistComponent } from './checklists/checklist/empty-checklist/empty-checklist.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    HomeComponent,
    TaskTypeComponent,
    EventsComponent,
    NotesComponent,
    EmptyNoteComponent,
    NoteItemComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    ProfileNotesComponent,
    ChecklistsComponent,
    ChecklistComponent,
    ChecklistItemComponent,
    EmptyChecklistComponent,
    NewsComponent,
    AboutUsComponent,
    ContactsComponent,
  ],
  imports: [CommonModule],
  exports: [
    HomeComponent,
    EventsComponent,
    NotesComponent,
    ChecklistsComponent,
    ProfileComponent,
    NewsComponent,
    AboutUsComponent,
    ContactsComponent,
  ],
})
export class MainModule {}
