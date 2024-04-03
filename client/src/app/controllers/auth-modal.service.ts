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
    this.loaderService.showLoader('login');

    this.showLoginScreen = true;
    this.showRegisterScreen = false;
    this.isLoading = true;
  }

  showRegisterModal(): void {
    this.loaderService.showLoader('register');

    this.showLoginScreen = false;
    this.showRegisterScreen = true;
    this.isLoading = true;
  }

  hideAuthModal(): void {
    this.showLoginScreen = false;
    this.showRegisterScreen = false;
    this.isLoading = false;
  }
}
