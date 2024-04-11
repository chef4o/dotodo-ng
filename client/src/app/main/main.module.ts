import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { HomeModule } from './home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsComponent } from './news/news.component';
import { BingMapComponent } from './about-us/bing-map/bing-map.component';

@NgModule({
  declarations: [
    MainComponent,
    ContactsComponent,
    AboutUsComponent,
    NewsComponent,
    BingMapComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    CoreModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
