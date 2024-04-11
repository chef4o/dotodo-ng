import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistsComponent } from './checklists.component';
import { ErrorPagesModule } from 'src/app/shared/error-handling/error-pages/error-pages.module';
import { EmptyChecklistComponent } from './checklist/empty-checklist/empty-checklist.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistItemComponent } from './checklist/checklist-item/checklist-item.component';
import { ChecklistsRoutingModule } from './checklists-routing.module';

@NgModule({
  declarations: [
    ChecklistsComponent,
    EmptyChecklistComponent,
    ChecklistItemComponent,
    ChecklistComponent,
  ],
  imports: [CommonModule, ErrorPagesModule, ChecklistsRoutingModule],
  exports: [ChecklistsComponent],
})
export class ChecklistsModule {}
