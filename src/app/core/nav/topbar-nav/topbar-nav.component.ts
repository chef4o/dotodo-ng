import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topbar-nav',
  templateUrl: './topbar-nav.component.html',
  styleUrls: ['./topbar-nav.component.css'],
})
export class TopbarNavComponent {

  get user() {
    return this.authService.user 
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  @Input() showLoginModal!: () => void;
  @Input() showRegisterModal!: () => void;

}
