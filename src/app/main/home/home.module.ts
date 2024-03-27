import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTypeComponent } from './task-type/task-type.component';
import { HomeComponent } from './home.component';
import { NavRoutingModule } from 'src/app/core/nav/nav-routing.module';

@NgModule({
  declarations: [HomeComponent, TaskTypeComponent],
  imports: [
    CommonModule,
    NavRoutingModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
