import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorValidationComponent } from './error-validation/error-validation.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [ErrorValidationComponent, LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [ErrorValidationComponent, LoadingSpinnerComponent]
})
export class SharedModule {}