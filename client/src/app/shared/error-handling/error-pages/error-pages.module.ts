import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Err403Component } from './err403/err403.component';
import { Err404Component } from './err404/err404.component';
import { Err204Component } from './err204/err204.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [Err204Component, Err403Component, Err404Component, UnderConstructionComponent],
  imports: [CommonModule],
  exports: [Err204Component, Err403Component, Err404Component, UnderConstructionComponent],
})
export class ErrorPagesModule {}
