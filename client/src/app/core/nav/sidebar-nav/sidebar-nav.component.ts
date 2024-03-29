import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IAuthUser } from 'src/app/shared/interfaces/authUser';
const sidebarNav = require('./sidebar-nav-elements.json');

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent {
  sidebarNavElements = sidebarNav;

  @Input() user!: IAuthUser | null;

  constructor(private authService: AuthService) {
  }

  ngOnChanges() {
    this.user = this.authService.user;
  }
  
  //change background according to the logic
  selectedPageBg = "home";
}
