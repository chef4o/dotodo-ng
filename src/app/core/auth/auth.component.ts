import { Component, Input } from '@angular/core';
import { GlobalLoaderService } from 'src/app/services/global-loader.service';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {

  showLoginModal = true;
  showRegisterModal = false;
  isLoading = true;

  constructor(private userService: UserService, private loaderService: GlobalLoaderService) {
    this.loaderService.showLoader('login');
  }

  hideAuthModal(): void {
    this.showLoginModal = false;
    this.showRegisterModal = false;
    this.isLoading = false;
  }
}
