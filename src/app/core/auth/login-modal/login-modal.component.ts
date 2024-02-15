import { Component, Input, OnInit } from '@angular/core';
import { GlobalLoaderService } from 'src/app/services/global-loader.service';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
})
export class LoginModalComponent {
  @Input() isLoading!: boolean;
  @Input() hideAuthModal!: () => void;  

}
