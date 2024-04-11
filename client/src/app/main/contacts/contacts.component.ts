import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  inquirySentOk = false;

  handleContactFormSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const value: {
      name: string;
      email: string;
      phone: string;
      comment: string;
    } = form.value;
    form.setValue({ name: '', email: '', phone: '', comment: '' });
    console.log(value);
  }
}
