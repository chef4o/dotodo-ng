import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthComponent, LoginModalComponent, RegisterModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'auth/login',
        component: LoginModalComponent,
      },
      {
        path: 'auth/register',
        component: RegisterModalComponent,
      },
    ]),
  ],
  exports: [AuthComponent, LoginModalComponent, RegisterModalComponent],
})
export class AuthModule {}
