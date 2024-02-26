import { Component, Input } from '@angular/core';
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

  constructor(private userService: UserService, private loaderService: GlobalLoaderService) {
    this.loaderService.showLoader('login');
  }

  showLoginModal(): void {
    this.showLoginScreen = true;
    this.showRegisterScreen = false;
  }

  showRegisterModal(): void {
    this.showRegisterScreen = true;
    this.showLoginScreen = false;
  }

  hideAuthModal(): void {
    this.showLoginScreen = false;
    this.showRegisterScreen = false;
    this.isLoading = false;
  }
}
