import { Injectable } from '@angular/core';
import { IAuthUser } from '../shared/interfaces/authUser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: BehaviorSubject<IAuthUser | null> = new BehaviorSubject<IAuthUser | null>(null);
  user$: Observable<IAuthUser | null> = this._user.asObservable();

  constructor() { }

  get isLoggedIn(): boolean {
    return !!this._user.getValue();
  }
  
  setUser(user: IAuthUser | null): void {
    this._user.next(user);
  }
}
