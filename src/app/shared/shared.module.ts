import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [ErrorComponent, LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [ErrorComponent, LoadingSpinnerComponent]
})
export class SharedModule {}
