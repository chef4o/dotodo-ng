import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IAuthUser } from 'src/app/shared/interfaces/authUser';

@Component({
  selector: 'app-topbar-nav',
  templateUrl: './topbar-nav.component.html',
  styleUrls: ['./topbar-nav.component.css'],
})
export class TopbarNavComponent {

  constructor(private authService: AuthService) {
  }

  ngOnChanges() {
    this.user = this.authService.user;
  }

  @Input() user!: IAuthUser | null;
  @Input() showLoginModal!: () => void;
  @Input() showRegisterModal!: () => void;

}
