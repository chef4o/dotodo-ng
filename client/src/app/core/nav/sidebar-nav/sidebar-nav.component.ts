import { Component, Input } from '@angular/core';
import { BackgroundColorService } from '../background-color.service';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/shared/interfaces/user';
const sidebarNav = require('./sidebar-nav-elements.json');

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css'],
})
export class SidebarNavComponent {
  sidebarNavElements = sidebarNav;

  @Input() user: IUser | null = null;

  constructor(
    private authService: AuthService,
    public backgroundService: BackgroundColorService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.user;
  }
}
