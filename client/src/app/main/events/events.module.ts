import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventItemComponent } from './event-item/event-item.component';
import { ErrorPagesModule } from 'src/app/shared/error-handling/error-pages/error-pages.module';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [EventsComponent, EventItemComponent],
  imports: [CommonModule, ErrorPagesModule, EventsRoutingModule],
  exports: [EventsComponent],
})
export class EventsModule {}