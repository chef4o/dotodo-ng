import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BingMapComponent } from './bing-map/bing-map.component';
import { AboutUsComponent } from './about-us.component';

@NgModule({
  declarations: [BingMapComponent, AboutUsComponent],
  imports: [CommonModule],
  exports: [AboutUsComponent],
})
export class AboutUsModule {}
