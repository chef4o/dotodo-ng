import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalLoaderService {
  loader: { title: string | null; text: string | null; show: boolean };

  constructor() {
    this.loader = { title: null, text: null, show: false };
  }

  show(title: string): void {
    this.loader.show = true;
    switch (title) {
      case 'login':
        this.loader.title = 'login'; 
        this.loader.text = 'Logging in...' ;
        break;
      case 'register':
        this.loader.title = 'register'; 
        this.loader.text = 'Creating account...' ;
        break;
      case 'loading':
        this.loader.title = 'loading'; 
        this.loader.text = 'Loading...' ;
        break;
      default:
        break;
    }
  }

  hide() {
    this.loader = { title: null, text: null, show: false };
  }
}
