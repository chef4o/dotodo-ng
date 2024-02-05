import { Component } from '@angular/core';
const topNav = require('./topbar-nav-elements.json');

@Component({
  selector: 'app-topbar-nav',
  templateUrl: './topbar-nav.component.html',
  styleUrls: ['./topbar-nav.component.css'],
})
export class TopbarNavComponent {
  topNavElements = topNav;
  user: { firstName?: string, username?: string } | undefined = undefined;
}
