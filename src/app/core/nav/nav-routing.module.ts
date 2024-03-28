import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "src/app/main/about-us/about-us.component";
import { ChecklistComponent } from "src/app/main/checklists/checklist/checklist.component";
import { ContactsComponent } from "src/app/main/contacts/contacts.component";
import { EventsComponent } from "src/app/main/events/events.component";
import { HomeComponent } from "src/app/main/home/home.component";
import { NewsComponent } from "src/app/main/news/news.component";
import { NotesComponent } from "src/app/main/notes/notes.component";
import { ProfileComponent } from "src/app/main/profile/profile.component";

const routes: Routes = [
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
    }
];

export const NavRoutingModule = RouterModule.forChild(routes);