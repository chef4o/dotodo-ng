import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EventsComponent
  },
];

export const EventsRoutingModule = RouterModule.forChild(routes);