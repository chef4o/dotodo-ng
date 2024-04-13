import { Component, Input, OnInit } from '@angular/core';
import { AuthModalService } from 'src/app/controllers/auth-modal.service';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-topbar-nav',
  templateUrl: './topbar-nav.component.html',
  styleUrls: ['./topbar-nav.component.css'],
})
export class TopbarNavComponent implements OnInit {
  @Input() user!: IUser | null;

  constructor(
    private authService: AuthService,
    private authModalService: AuthModalService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.user;
  }

  showLoginModal(): void {
    this.authModalService.showLoginModal();
  }

  showRegisterModal(): void {
    this.authModalService.showRegisterModal();
  }

  logout(): void {
    this.authService.logout();
  }
}
