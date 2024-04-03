import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../shared/interfaces/user';
import { GlobalLoaderService } from './global-loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);
  user$: Observable<IUser | null> = this._user.asObservable();

  showLoginScreen: boolean = false;
  showRegisterScreen: boolean = false;
  isLoading: boolean = false;

  constructor(private loaderService: GlobalLoaderService) { }

  get isLoggedIn(): boolean {
    return !!this._user.getValue();
  }

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

  setUser(user: IUser | null): void {
    this._user.next(user);
  }
}
