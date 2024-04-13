import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavModule } from './nav/nav.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, NavModule, SharedModule],
  exports: [NavModule, FooterComponent],
})
export class CoreModule { }