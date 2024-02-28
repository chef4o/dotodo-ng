import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { BottombarNavComponent } from './bottombar-nav/bottombar-nav.component';
import { ConnectNavComponent } from './connect-nav/connect-nav.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { TopbarNavComponent } from './topbar-nav/topbar-nav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { HomeComponent } from 'src/app/main/home/home.component';
import { NotesComponent } from 'src/app/main/notes/notes.component';
import { ChecklistsComponent } from 'src/app/main/checklists/checklists.component';
import { EventsComponent } from 'src/app/main/events/events.component';
import { ProfileComponent } from 'src/app/main/profile/profile.component';
import { AboutUsComponent } from 'src/app/main/about-us/about-us.component';
import { ContactsComponent } from 'src/app/main/contacts/contacts.component';
import { NewsComponent } from 'src/app/main/news/news.component';

@NgModule({
  declarations: [
    NavComponent,
    BottombarNavComponent,
    ConnectNavComponent,
    SidebarNavComponent,
    TopbarNavComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'notes',
        component: NotesComponent,
      },
      {
        path: 'checklists',
        component: ChecklistsComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'about',
        component: AboutUsComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
    ]),
  ],
  exports: [
    NavComponent
  ],
})
export class NavModule {}
