import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ErrorHandlingModule } from './error-handling/error-handling.module';
import { ShrinkToFitPipe } from './pipes/shrink-to-fit.pipe';

@NgModule({
  declarations: [LoadingSpinnerComponent, ShrinkToFitPipe],
  imports: [CommonModule, ErrorHandlingModule],
  exports: [LoadingSpinnerComponent, ShrinkToFitPipe]
})
export class SharedModule {}