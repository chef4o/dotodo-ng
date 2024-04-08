import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { EmptyNoteComponent } from './empty-note/empty-note.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { ErrorHandlingModule } from 'src/app/shared/error-handling/error-handling.module';
import { ErrorPagesModule } from 'src/app/shared/error-handling/error-pages/error-pages.module';

@NgModule({
  declarations: [NotesComponent, EmptyNoteComponent, NoteItemComponent],
  imports: [CommonModule, ErrorPagesModule],
  exports: [NotesComponent],
})
export class NotesModule {}
