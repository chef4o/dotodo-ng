import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topbar-nav',
  templateUrl: './topbar-nav.component.html',
  styleUrls: ['./topbar-nav.component.css'],
})
export class TopbarNavComponent {

  user: any;

  constructor(private authService: AuthService) {
  }

  ngOnChanges() {
    this.user = this.authService.user;
  }

  @Input() showLoginModal!: () => void;
  @Input() showRegisterModal!: () => void;

}
