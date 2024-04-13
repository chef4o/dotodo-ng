import { Injectable, OnDestroy } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, catchError, filter, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$
    .asObservable()
    .pipe(filter((val): val is IUser | null => val != undefined));

  user: IUser | null = null;

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  get isLoggedIn(): boolean {
    return this.user != null;
  }

  register(email: string, username: string, password: string) {
    return this.http
      .post<IUser>('/api/register', {
        email,
        username,
        password,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http
      .post<IUser>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    this.user = null;
    return this.http
      .post<void>('/api/logout', {})
      .pipe(tap(() => this.user$$.next(null)));
  }

  getProfile() {
    return this.http
      .get<IUser>('/api/profile')
      .pipe(tap((user) => this.user$$.next(user)), 
    catchError((err) => {
      this.user$$.next(null);
      return of(err);
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
