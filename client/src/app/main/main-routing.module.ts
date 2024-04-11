import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'notes',
        loadChildren: () =>
          import('./notes/notes.module').then((m) => m.NotesModule),
      },
      {
        path: 'checklists',
        loadChildren: () =>
          import('./checklists/checklists.module').then(
            (m) => m.ChecklistsModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./events/events.module').then((m) => m.EventsModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./about-us/about-us.module').then((m) => m.AboutUsModule),
      },   
]

export const MainRoutingModule = RouterModule.forChild(routes);