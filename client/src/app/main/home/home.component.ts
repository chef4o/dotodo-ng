import { Component, Input } from '@angular/core';
import { AuthModalService } from 'src/app/services/auth-modal.service';
const taskTypes = require('./taskTypes.json');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  types = taskTypes;

  constructor(private authModalService: AuthModalService) { }

  showLoginModal(): void {
    this.authModalService.showLoginModal();
  }

  showRegisterModal(): void { 
    this.authModalService.showRegisterModal();
  }

}