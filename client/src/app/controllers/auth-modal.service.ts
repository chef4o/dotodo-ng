import { Injectable } from '@angular/core';
import { GlobalLoaderService } from '../services/global-loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthModalService {
  showLoginScreen: boolean = false;
  showRegisterScreen: boolean = false;
  isLoading: boolean = false;

  constructor(private loaderService: GlobalLoaderService) { }

  showLoginModal(): void {
    this.showLoginScreen = true;
    this.showRegisterScreen = false;
  }

  showRegisterModal(): void {
    this.showLoginScreen = false;
    this.showRegisterScreen = true;
  }

  hideAuthModal(): void {
    this.loaderService.hide();

    this.showLoginScreen = false;
    this.showRegisterScreen = false;
    this.isLoading = false;
  }
}
