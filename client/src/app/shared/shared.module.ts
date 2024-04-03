import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorValidationComponent } from './error-validation/error-validation.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { EmailValidatorDirective } from './validators/email-validation.directive';

@NgModule({
  declarations: [ErrorValidationComponent, LoadingSpinnerComponent, EmailValidatorDirective],
  imports: [CommonModule],
  exports: [ErrorValidationComponent, LoadingSpinnerComponent, EmailValidatorDirective]
})
export class SharedModule {}