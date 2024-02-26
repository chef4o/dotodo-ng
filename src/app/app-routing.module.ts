import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { NotesComponent } from './main/notes/notes.component';
import { ChecklistsComponent } from './main/checklists/checklists.component';
import { EventsComponent } from './main/events/events.component';
import { ProfileComponent } from './main/profile/profile.component';
import { LoginModalComponent } from './core/auth/login-modal/login-modal.component';
import { RegisterModalComponent } from './core/auth/register-modal/register-modal.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { NewsComponent } from './main/news/news.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
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
    path: 'auth/login',
    component: LoginModalComponent,
  },
  {
    path: 'auth/register',
    component: RegisterModalComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
