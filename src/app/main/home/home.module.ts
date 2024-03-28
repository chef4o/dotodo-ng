import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTypeComponent } from './task-type/task-type.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, TaskTypeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
