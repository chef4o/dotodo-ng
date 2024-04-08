import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ErrorHandlingModule } from './error-handling/error-handling.module';

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [CommonModule, ErrorHandlingModule],
  exports: [LoadingSpinnerComponent]
})
export class SharedModule {}