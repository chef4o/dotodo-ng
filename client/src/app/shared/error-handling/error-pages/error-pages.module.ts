import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Err403Component } from './err403/err403.component';
import { Err404Component } from './err404/err404.component';
import { Err204Component } from './err204/err204.component';

@NgModule({
  declarations: [Err204Component, Err403Component, Err404Component],
  imports: [CommonModule],
  exports: [Err204Component, Err403Component, Err404Component],
})
export class ErrorPagesModule {}
