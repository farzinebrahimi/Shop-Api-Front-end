import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserService} from '../../../../_services/users/user.service';
import {UserModelForCreate} from '../../../../_models/user/user.model';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: UserModelForCreate = new UserModelForCreate();
  loggedIn: boolean = false;

  constructor(
    private userService: UserService
  ) {
  }

  login(){
    this.userService.loginUser(this.user);
    this.loggedIn = true;
  }

  logout(){
    this.userService.logoutUser();
    this.loggedIn = false;
  }
}
