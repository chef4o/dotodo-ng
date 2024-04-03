import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
})
export class LoginModalComponent {
  @Output() hideAuthModalHandler: EventEmitter<void> = new EventEmitter<void>();

  handleLoginFormSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const value: { username: string; password: string } = form.value;
    form.setValue({ username: '', password: '' });
    console.log(value);
  }

  hideModal() {
    this.hideAuthModalHandler.emit();
  }
}