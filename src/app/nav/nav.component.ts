import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  showAuthModal = {
    login: false,
    register: false,
  };
  
  hideAuthModal() : void {
    this.showAuthModal.login = false;
    this.showAuthModal.register = false;
  }
}
