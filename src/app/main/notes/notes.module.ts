import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { EmptyNoteComponent } from './empty-note/empty-note.component';
import { NoteItemComponent } from './note-item/note-item.component';

@NgModule({
  declarations: [NotesComponent, EmptyNoteComponent, NoteItemComponent],
  imports: [CommonModule],
  exports: [NotesComponent],
})
export class NotesModule {}
