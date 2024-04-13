import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
import { ErrorHandlingModule } from 'src/app/shared/error-handling/error-handling.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginModalComponent,
    RegisterModalComponent,
    LogoutComponent,
  ],
  imports: [CommonModule, FormsModule, ErrorHandlingModule, SharedModule],
  exports: [AuthComponent],
})
export class AuthModule {}
