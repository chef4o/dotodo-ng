import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavModule } from './nav/nav.module';
import { AuthModule } from './auth/auth.module';
import { ErrorPageComponent } from '../main/error-page/error-page.component';

@NgModule({
  declarations: [FooterComponent, ErrorPageComponent],
  imports: [CommonModule, NavModule, AuthModule],
  exports: [NavModule, FooterComponent, ErrorPageComponent],
})
export class CoreModule {}