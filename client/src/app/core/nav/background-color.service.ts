import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundColorService {

  public selectedPageBg: string = 'home';

  constructor() { }

  setBackground(page: string) {
    this.selectedPageBg = page;
  }
}
