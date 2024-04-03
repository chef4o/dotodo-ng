import { Component, Input } from '@angular/core';
import { IAuthUser } from 'src/app/shared/interfaces/authUser';
import { BackgroundColorService } from '../background-color.service';
import { AuthService } from 'src/app/services/auth.service';
const sidebarNav = require('./sidebar-nav-elements.json');

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent {
  sidebarNavElements = sidebarNav;

  @Input() user: IAuthUser | null = null;

  constructor(private authService: AuthService, public backgroundService: BackgroundColorService) {
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }
}
