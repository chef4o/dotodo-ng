import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalLoaderService } from 'src/app/services/global-loader.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  showLoginScreen = false;
  showRegisterScreen = false;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private loaderService: GlobalLoaderService,
  ) {
  }

  showLoginModal(): void {
    this.loaderService.showLoader('login');

    this.showLoginScreen = true;
    this.showRegisterScreen = false;
    this.isLoading = true;
  }

  showRegisterModal(): void {
    this.loaderService.showLoader('register');

    this.showRegisterScreen = true;
    this.showLoginScreen = false;
    this.isLoading = true;
  }

  hideAuthModal(): void {
    this.showLoginScreen = false;
    this.showRegisterScreen = false;
    this.isLoading = false;
  }
}
