import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthComponent, LoginModalComponent, RegisterModalComponent, LogoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports: [AuthComponent],
})
export class AuthModule { }