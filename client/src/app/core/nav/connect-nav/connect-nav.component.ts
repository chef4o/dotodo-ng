import { Component } from '@angular/core';
const connectNav = require('./connect-nav-elements.json');

@Component({
  selector: 'app-connect-nav',
  templateUrl: './connect-nav.component.html',
  styleUrls: ['./connect-nav.component.css'],
})
export class ConnectNavComponent {
  connectElements = connectNav;
}
