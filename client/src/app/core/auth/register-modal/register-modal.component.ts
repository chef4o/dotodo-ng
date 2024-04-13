import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
})
export class RegisterModalComponent implements OnInit {
  @Output() hideAuthModalHandler: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  handleRegisterFormSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, username, password } = form.value;
    this.authService.register(email, username, password).subscribe();
    this.hideModal();
  }

  hideModal() {
    this.hideAuthModalHandler.emit();
  }
}
