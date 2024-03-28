import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavModule } from './nav/nav.module';
import { AuthModule } from './auth/auth.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [FooterComponent, ErrorComponent],
  imports: [CommonModule, NavModule, AuthModule],
  exports: [NavModule, FooterComponent],
})
export class CoreModule {}
