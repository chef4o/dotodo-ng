import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModalService } from 'src/app/services/auth-modal.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.setUser(null);
    this.router.navigate(['/']);
  }

}
