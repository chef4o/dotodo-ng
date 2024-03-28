import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { BottombarNavComponent } from './bottombar-nav/bottombar-nav.component';
import { ConnectNavComponent } from './connect-nav/connect-nav.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { TopbarNavComponent } from './topbar-nav/topbar-nav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavComponent,
    BottombarNavComponent,
    ConnectNavComponent,
    SidebarNavComponent,
    TopbarNavComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthModule,
    RouterModule
  ],
  exports: [
    NavComponent
  ],
})
export class NavModule { }
