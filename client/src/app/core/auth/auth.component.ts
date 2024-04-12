import { Component, Input } from '@angular/core';
import { AuthModalService } from 'src/app/controllers/auth-modal.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  @Input() showLoginScreen!: boolean;
  @Input() showRegisterScreen!: boolean;
  @Input() isLoading!: boolean;

  constructor(private authService: AuthModalService) {}

  hideAuthModalHandler(): void {
    this.authService.hideAuthModal();
  }
}
