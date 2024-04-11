import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Err404Component } from './shared/error-handling/error-pages/err404/err404.component';
import { Err403Component } from './shared/error-handling/error-pages/err403/err403.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./main/notes/notes.module').then((m) => m.NotesModule),
  },
  {
    path: 'checklists',
    loadChildren: () =>
      import('./main/checklists/checklists.module').then(
        (m) => m.ChecklistsModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./main/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./main/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./main/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: '404-not-found',
    component: Err404Component,
  },
  {
    path: '403-forbidden',
    component: Err403Component,
  },
  {
    path: '**',
    redirectTo: '/404-not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
