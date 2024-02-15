import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalLoaderService {
  loader: { title: string | null; text: string | null } = {
    title: null,
    text: null,
  };

  constructor() {
    this.loader = { title: null, text: null };
  }

  showLoader(title: string): void {
    switch (title) {
      case 'login':
        this.loader = { title: 'login', text: 'Logging in...' };
        break;
      case 'register':
        this.loader = { title: 'register', text: 'Creating account...' };
        break;
      default:
        break;
    }
  }

  hideLoader() {
    this.loader = { title: null, text: null };
  }
}
