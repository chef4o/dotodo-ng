import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: IUser | null = null;
  private userSubscription: Subscription;

  constructor(
    private authService: AuthService,
  ) {
    this.userSubscription = this.authService.user$.subscribe({
      next: (user: IUser | null) => {
        this.user = user;
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
