import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TopbarNavComponent } from './nav/topbar-nav/topbar-nav.component';
import { SidebarNavComponent } from './nav/sidebar-nav/sidebar-nav.component';
import { LoginModalComponent } from './auth/login-modal/login-modal.component';
import { RegisterModalComponent } from './auth/register-modal/register-modal.component';
import { ConnectNavComponent } from './nav/connect-nav/connect-nav.component';
import { AuthComponent } from './auth/auth.component';
import { BottombarNavComponent } from './nav/bottombar-nav/bottombar-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TopbarNavComponent,
    SidebarNavComponent,
    ConnectNavComponent,
    BottombarNavComponent,
    AuthComponent,
    LoginModalComponent,
    RegisterModalComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
