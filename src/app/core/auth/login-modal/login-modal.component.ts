import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
})
export class LoginModalComponent {
  @Input() isLoading!: boolean;
  @Input() hideAuthModal!: () => void;  
  @Input() showLoginModal!: () => void;
}
