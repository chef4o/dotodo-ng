import { Component, Input, OnInit } from '@angular/core';
import { AuthModalService } from 'src/app/services/auth-modal.service';
import { AuthService } from 'src/app/services/auth.service';
import { IAuthUser } from 'src/app/shared/interfaces/authUser';

@Component({
  selector: 'app-topbar-nav',
  templateUrl: './topbar-nav.component.html',
  styleUrls: ['./topbar-nav.component.css'],
})
export class TopbarNavComponent implements OnInit {
  @Input() user!: IAuthUser | null;

  constructor(private authService: AuthService, private authModalService: AuthModalService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  showLoginModal(): void {
    this.authModalService.showLoginModal();
  }

  showRegisterModal(): void { 
    this.authModalService.showRegisterModal();
  }
}
