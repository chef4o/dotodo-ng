import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-empty-note',
  templateUrl: './empty-note.component.html',
  styleUrls: ['./empty-note.component.css'],
})
export class EmptyNoteComponent {

  constructor(private noteService: NoteService) {}

  handleNewNoteSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { title, content } = form.value;


  }
}
