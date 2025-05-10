import { Component } from '@angular/core';
import {UserService} from '../../../../_services/users/user.service';
import {UserModelForCreate} from '../../../../_models/user/user.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [
    FormsModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  user: UserModelForCreate = new UserModelForCreate();

  constructor(
    private userService: UserService,
  ) {}

  registerUser() {
    this.userService.registerUser(this.user).subscribe(
      data => {
        alert('User registered successfully!');
      },
      error => {
        alert('Error registering user: ' + error);
      }
    );
  }
}
