import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorValidationComponent } from './error-validation/error-validation.component';
import { EmailValidatorDirective } from './validators/email-validation.directive';

@NgModule({
  declarations: [ErrorValidationComponent, EmailValidatorDirective],
  imports: [CommonModule],
  exports: [ErrorValidationComponent, EmailValidatorDirective],
})
export class ErrorHandlingModule {}
