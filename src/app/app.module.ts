import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TopbarNavComponent } from './nav/topbar-nav/topbar-nav.component';
import { SidebarNavComponent } from './nav/sidebar-nav/sidebar-nav.component';
import { LoginModalComponent } from './auth/login-modal/login-modal.component';
import { RegisterModalComponent } from './auth/register-modal/register-modal.component';
import { ConnectNavComponent } from './nav/connect-nav/connect-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TopbarNavComponent,
    SidebarNavComponent,
    ConnectNavComponent,
    LoginModalComponent,
    RegisterModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
