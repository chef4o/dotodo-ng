import { Component, Input, OnInit } from '@angular/core';
import { AuthModalService } from 'src/app/services/auth-modal.service';
import { AuthService } from 'src/app/services/auth.service';
import { IAuthUser } from 'src/app/shared/interfaces/authUser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  @Input() user: IAuthUser | null = null; 

  constructor(private authService: AuthService, private authModalService: AuthModalService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  getAuthService(): AuthModalService {
    return this.authModalService;
  }
}
