import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { BottombarNavComponent } from './nav/bottombar-nav/bottombar-nav.component';
import { ConnectNavComponent } from './nav/connect-nav/connect-nav.component';
import { SidebarNavComponent } from './nav/sidebar-nav/sidebar-nav.component';
import { TopbarNavComponent } from './nav/topbar-nav/topbar-nav.component';
import { AuthComponent } from './auth/auth.component';
import { LoginModalComponent } from './auth/login-modal/login-modal.component';
import { RegisterModalComponent } from './auth/register-modal/register-modal.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavComponent,
    BottombarNavComponent,
    ConnectNavComponent,
    SidebarNavComponent,
    TopbarNavComponent,
    AuthComponent,
    LoginModalComponent,
    RegisterModalComponent,
    FooterComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [NavComponent, FooterComponent],
})
export class CoreModule {}
