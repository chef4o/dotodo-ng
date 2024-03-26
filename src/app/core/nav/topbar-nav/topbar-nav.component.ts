import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topbar-nav',
  templateUrl: './topbar-nav.component.html',
  styleUrls: ['./topbar-nav.component.css'],
})
export class TopbarNavComponent {

  user: any;

  constructor() {
    this.user = true;
  }

  @Input() showLoginModal!: () => void;
  @Input() showRegisterModal!: () => void;

}
