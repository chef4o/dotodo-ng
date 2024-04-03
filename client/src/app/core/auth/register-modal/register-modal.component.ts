import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { emailValidator } from '../../../shared/validators/email-validator';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
})
export class RegisterModalComponent implements OnInit {
  @Output() hideAuthModalHandler: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {

  }

  handleRegisterFormSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const value: { email: string; username: string; password: string; repass: string } = form.value;
    form.setValue({ email: '', username: '', password: '', repass: '' });
    console.log(value);
  }

  hideModal() {
    this.hideAuthModalHandler.emit();
  }
}