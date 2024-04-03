import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {

  @Input() showLoginScreen!: boolean;
  @Input() showRegisterScreen!: boolean;
  @Input() isLoading!: boolean;

  constructor(private authService: AuthService) {}

  hideAuthModalHandler(): void {
    this.authService.hideAuthModal();
  }
}
