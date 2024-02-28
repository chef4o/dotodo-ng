import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTypeComponent } from './task-type/task-type.component';
import { RouterModule } from '@angular/router';
import { NotesComponent } from '../notes/notes.component';
import { ChecklistsComponent } from '../checklists/checklists.component';
import { EventsComponent } from '../events/events.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, TaskTypeComponent],
  imports: [
    CommonModule, RouterModule.forChild([
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
    ])
  ], 
  exports: [HomeComponent]
})
export class HomeModule { }
