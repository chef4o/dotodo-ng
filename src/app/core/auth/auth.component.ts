import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalLoaderService } from 'src/app/services/global-loader.service';
import { UserService } from 'src/app/services/users.service';

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
    private userService: UserService,
    private loaderService: GlobalLoaderService,
    private router: Router,
  ) {
  }

  showLoginModal(): void {
    this.router.navigateByUrl('/auth/login');
    this.loaderService.showLoader('login');

    this.showLoginScreen = true;
    this.showRegisterScreen = false;
    this.isLoading = true;
  }

  showRegisterModal(): void {
    this.router.navigateByUrl('/auth/register');
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
