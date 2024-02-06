import { Component } from '@angular/core';
const bottomNav = require('./bottom-nav-elements.json') 

@Component({
  selector: 'app-bottombar-nav',
  templateUrl: './bottombar-nav.component.html',
  styleUrls: ['./bottombar-nav.component.css']
})
export class BottombarNavComponent {

  bottomNavElements = bottomNav;

}
