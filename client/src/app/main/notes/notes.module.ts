import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { EmptyNoteComponent } from './empty-note/empty-note.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { ErrorPagesModule } from 'src/app/shared/error-handling/error-pages/error-pages.module';
import { NotesRoutingModule } from './notes-routing.module';

@NgModule({
  declarations: [NotesComponent, EmptyNoteComponent, NoteItemComponent],
  imports: [CommonModule, ErrorPagesModule, NotesRoutingModule],
  exports: [NotesComponent],
})
export class NotesModule {}
