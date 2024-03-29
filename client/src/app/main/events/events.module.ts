import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventItemComponent } from './event-item/event-item.component';

@NgModule({
  declarations: [EventsComponent, EventItemComponent],
  imports: [CommonModule],
  exports: [EventsComponent],
})
export class EventsModule {}