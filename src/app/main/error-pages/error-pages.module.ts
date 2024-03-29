import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Err403Component } from './err403/err403.component';
import { Err404Component } from './err404/err404.component';
import { ErrorPagesComponent } from './error-pages.component';

@NgModule({
  declarations: [Err403Component, Err404Component, ErrorPagesComponent],
  imports: [
    CommonModule
  ], 
  exports: [Err403Component, Err404Component]
})
export class ErrorPagesModule { }
