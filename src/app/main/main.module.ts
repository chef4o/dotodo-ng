import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { NotesModule } from './notes/notes.module';
import { EventsModule } from './events/events.module';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { AuthRoutingModule } from '../core/auth/auth-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    NewsComponent,
    AboutUsComponent,
    ContactsComponent
  ],
  imports: [
    AuthRoutingModule,
    CoreModule,
    CommonModule,
    SharedModule,
    HomeModule,
    EventsModule,
    NotesModule,
    ProfileModule,
    AppRoutingModule,
  ],
  exports: [MainComponent, NewsComponent, AboutUsComponent, ContactsComponent],
})
export class MainModule { }
