import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "src/app/main/about-us/about-us.component";
import { ChecklistsComponent } from "src/app/main/checklists/checklists.component";
import { ContactsComponent } from "src/app/main/contacts/contacts.component";
import { EventsComponent } from "src/app/main/events/events.component";
import { HomeComponent } from "src/app/main/home/home.component";
import { NewsComponent } from "src/app/main/news/news.component";
import { NotesComponent } from "src/app/main/notes/notes.component";
import { ProfileComponent } from "src/app/main/profile/profile.component";
import { AuthAccess } from "src/app/shared/guards/auth.access";

const routes: Routes = [
    {
        path: 'about-us',
        component: AboutUsComponent,
        data: {
            title: 'About DOTODO',
        }
    },
    {
        path: 'news',
        component: NewsComponent,
        data: {
            title: 'DOTODO News',
        }
    },
    {
        path: 'contacts',
        component: ContactsComponent,
        data: {
            title: 'DOTODO Contacts',
        }
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'DOTODO Task Manager',
        }
    },
    {
        path: 'events',
        canActivate: [AuthAccess],
        component: EventsComponent,
        data: {
            title: 'DOTODO Events',
            loginRequired: true
        }
    },
    {
        path: 'notes',
        canActivate: [AuthAccess],
        component: NotesComponent,
        data: {
            title: 'DOTODO Notes',
            loginRequired: true
        }
    },
    {
        path: 'checklists',
        canActivate: [AuthAccess],
        component: ChecklistsComponent,
        data: {
            title: 'DOTODO Checklists',
            loginRequired: true
        }
    },
    {
        path: 'profile',
        canActivate: [AuthAccess],
        component: ProfileComponent,
        data: {
            title: 'My DOTODO',
            loginRequired: true
        }
    }
];

export const NavRoutingModule = RouterModule.forChild(routes);