import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-type',
  templateUrl: './task-type.component.html',
  styleUrls: ['./task-type.component.css'],
})
export class TaskTypeComponent {
  @Input() task!: {
    name: string;
    headerText: string;
    description: string;
  };
}
