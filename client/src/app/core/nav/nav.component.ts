import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthModalService } from 'src/app/controllers/auth-modal.service';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnDestroy {
  userData: IUser | null = null;
  private userSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private authModalService: AuthModalService
  ) {
    this.userSubscription = this.authService.user$.subscribe({
      next: (userData: IUser | null) => {
        this.userData = userData;
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  getAuthService(): AuthModalService {
    return this.authModalService;
  }
}
