import { Component } from '@angular/core';
const sidebarNav = require('./sidebar-nav-elements.json');

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent {
  sidebarNavElements = sidebarNav;

  user: any;
  
  //change background according to the logic
  selectedPageBg = true;
}
