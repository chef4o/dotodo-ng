import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  showLoginModal = false;
  showRegisterModal = true;

  hideAuthModal(): void {

    this.showLoginModal = false;
    this.showRegisterModal = false;
  }
}
