import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { HomeModule } from './home/home.module';
import { EventsModule } from './events/events.module';
import { NotesModule } from './notes/notes.module';
import { ProfileModule } from './profile/profile.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    MainComponent, 
    ContactsComponent,
    AboutUsComponent, 
    NewsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    EventsModule,
    NotesModule,
    ProfileModule,
    CoreModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [MainComponent],
})
export class MainModule { }
