import { Component, Input } from '@angular/core';
import { BackgroundColorService } from 'src/app/core/nav/background-color.service';

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

  constructor(public backgroundService: BackgroundColorService) {
  }
}
