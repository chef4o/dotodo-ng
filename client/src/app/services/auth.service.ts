import { Injectable } from '@angular/core';
import { IAuthUser } from '../shared/interfaces/authUser';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: BehaviorSubject<IAuthUser | null> =
    new BehaviorSubject<IAuthUser | null>(null);
  user$: Observable<IAuthUser | null> = this._user.asObservable();

  constructor(private http: HttpClient) {}

  get isLoggedIn(): boolean {
    return !!this._user.getValue();
  }

  setUser(user: IAuthUser | null): void {
    this._user.next(user);
  }

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string
  ) {
    return this.http.post<any>('api/register', {
      username,
      email,
      password,
      rePassword,
    });
  }

  login(username: string, password: string) {
    this.http.post<any>('api/login', { username, password });
  }
}
