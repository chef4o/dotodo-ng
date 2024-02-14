import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {

  constructor(private userService: UserService) {}

  showLoginModal = false;
  showRegisterModal = false;

  hideAuthModal(): void {
    this.showLoginModal = false;
    this.showRegisterModal = false;
  }
}
