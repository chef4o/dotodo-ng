import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IAuthUser } from 'src/app/shared/interfaces/authUser';
import { BackgroundColorService } from '../background-color.service';
const sidebarNav = require('./sidebar-nav-elements.json');

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent {
  sidebarNavElements = sidebarNav;

  @Input() user!: IAuthUser | null;

  constructor(private authService: AuthService, public backgroundService: BackgroundColorService) {
  }

  ngOnChanges() {
    this.user = this.authService.user;
  }
}
