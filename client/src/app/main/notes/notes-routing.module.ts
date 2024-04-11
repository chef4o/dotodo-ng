import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';

const routes: Routes = [{
    path: '', 
    pathMatch: 'full', 
    component: NotesComponent
}];

export const NotesRoutingModule = RouterModule.forChild(routes);
