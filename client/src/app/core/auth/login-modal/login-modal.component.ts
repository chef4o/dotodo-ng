import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
})
export class LoginModalComponent {
  @Output() hideAuthModalHandler: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: AuthService) {}

  handleLoginFormSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.authService.login(email, password).subscribe();
    
    this.hideModal();
  }

  hideModal() {
    this.hideAuthModalHandler.emit();
  }
}
