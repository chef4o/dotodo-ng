import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistsComponent } from './checklists.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistItemComponent } from './checklist/checklist-item/checklist-item.component';
import { EmptyChecklistComponent } from './checklist/empty-checklist/empty-checklist.component';

@NgModule({
  declarations: [
    ChecklistsComponent,
    ChecklistComponent,
    ChecklistItemComponent,
    EmptyChecklistComponent,
  ],
  imports: [CommonModule],
  exports: [
    ChecklistsComponent,
    ChecklistComponent,
    ChecklistItemComponent,
    EmptyChecklistComponent,
  ],
})
export class ChecklistsModule {}
