import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserService} from '../../../../_services/users/user.service';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass, NgForOf, NgIf, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgForOf,
    NgClass,
    TitleCasePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  user: any = {} ;
  loggedIn: boolean = false;

  isDropdownOpen = false;

  constructor(
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.currentUser() || {};
  }

  headerLink =[
    {title: 'HOME', url:'/home'},
    {title: 'Matches', url:'/members'},
    {title: 'Lists', url:'/lists'},
    {title: 'Messages', url:'/messages'},
  ]

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  login(){
    this.userService.loginUser(this.user) ;
    this.loggedIn = true;
  }

  logout(){
    this.userService.logoutUser();
    this.loggedIn = false;
  }

  protected readonly TitleCasePipe = TitleCasePipe;
}
