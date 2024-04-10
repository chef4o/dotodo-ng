import { Component } from '@angular/core';

@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.component.html',
  styleUrls: ['./checklists.component.css']
})
export class ChecklistsComponent {

  checklists = [];
  checklist = [];
  makeNew = false;

}
