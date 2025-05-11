import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserService} from '../../../../_services/users/user.service';
import {UserModelForCreate} from '../../../../_models/user/user.model';
import {NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: UserModelForCreate = new UserModelForCreate();
  loggedIn: boolean = false;

  constructor(
    public userService: UserService,
    private router: Router
  ) {
  }
  headerLink =[
    {title: 'HOME', url:'/home'},
    {title: 'Matches', url:'/members'},
    {title: 'Lists', url:'/lists'},
    {title: 'Messages', url:'/messages'},
  ]

  login(){
    this.userService.loginUser(this.user);

    this.loggedIn = true;
  }

  logout(){
    this.userService.logoutUser();
    this.loggedIn = false;
  }
}
