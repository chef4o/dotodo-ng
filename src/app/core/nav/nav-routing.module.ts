import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "src/app/main/about-us/about-us.component";
import { ChecklistsComponent } from "src/app/main/checklists/checklists.component";
import { ContactsComponent } from "src/app/main/contacts/contacts.component";
import { EventsComponent } from "src/app/main/events/events.component";
import { HomeComponent } from "src/app/main/home/home.component";
import { NewsComponent } from "src/app/main/news/news.component";
import { NotesComponent } from "src/app/main/notes/notes.component";
import { ProfileComponent } from "src/app/main/profile/profile.component";

const routes: Routes = [
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
];

export const NavRoutingModule = RouterModule.forChild(routes);
