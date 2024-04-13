import { Component, Input, OnInit } from '@angular/core';
import { AuthModalService } from 'src/app/controllers/auth-modal.service';
import { GlobalLoaderService } from 'src/app/services/global-loader.service';
import { ShrinkToFitPipe } from 'src/app/shared/pipes/shrink-to-fit.pipe';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  @Input() showLoginScreen!: boolean;
  @Input() showRegisterScreen!: boolean;
  @Input() isLoading!: boolean;

  constructor(private authModalService: AuthModalService) {}

  hideAuthModalHandler(): void {
    this.authModalService.hideAuthModal();
  }
}
