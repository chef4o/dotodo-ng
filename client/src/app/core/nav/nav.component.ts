import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IAuthUser } from 'src/app/shared/interfaces/authUser';
import { BackgroundColorService } from './background-color.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {

  user: IAuthUser | null = null;

  constructor(private authService: AuthService) {
  }

  ngOnChanges() {
    this.user = this.authService.user;
  }

  // ngOnInit(): void {
  //   this.user = {
  //     _id: '123',
  //     firstName: '',
  //     username: 'Bill'
  //   }
  // }
}
