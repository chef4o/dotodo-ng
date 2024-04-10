import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.css']
})
export class ChecklistItemComponent {

  @Input() task!: {taskStatus: string};

}
