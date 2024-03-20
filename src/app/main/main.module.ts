import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [AppRoutingModule],
  exports: [MainComponent],
})
export class MainModule {}
