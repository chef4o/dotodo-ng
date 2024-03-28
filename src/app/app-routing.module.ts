import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './main/error-page/error-page.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { NewsComponent } from './main/news/news.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { HomeComponent } from './main/home/home.component';
import { EventsComponent } from './main/events/events.component';
import { NotesComponent } from './main/notes/notes.component';
import { ChecklistComponent } from './main/checklists/checklist/checklist.component';
import { ProfileComponent } from './main/profile/profile.component';
import { AuthComponent } from './core/auth/auth.component';
import { LogoutComponent } from './core/auth/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'auth/login',
    component: AuthComponent
  },
  {
    path: 'auth/register',
    component: AuthComponent
  },
  {
    path: 'auth/logout',
    component: LogoutComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
    path: 'checklists',
    component: ChecklistComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
