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
        data: {
            title: 'About DOTODO',
            loginRequired: false
        }
    },
    {
        path: 'news',
        component: NewsComponent,
        data: {
            title: 'DOTODO News',
            loginRequired: false
        }
    },
    {
        path: 'contacts',
        component: ContactsComponent,
        data: {
            title: 'DOTODO Contacts',
            loginRequired: false
        }
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'DOTODO Task Manager',
            loginRequired: false
        }
    },
    {
        path: 'events',
        component: EventsComponent,
        data: {
            title: 'DOTODO Events',
            loginRequired: true
        }
    },
    {
        path: 'notes',
        component: NotesComponent,
        data: {
            title: 'DOTODO Notes',
            loginRequired: true
        }
    },
    {
        path: 'checklists',
        component: ChecklistComponent,
        data: {
            title: 'DOTODO Checklists',
            loginRequired: true
        }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        data: {
            title: 'My DOTODO',
            loginRequired: true
        }
    }
];

export const NavRoutingModule = RouterModule.forChild(routes);