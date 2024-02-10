import { Component, Input } from '@angular/core';
const taskTypes = require('./taskTypes.json');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input() showLoginModal!: () => void;
  @Input() showRegisterModal!: () => void;

  types = taskTypes;

}