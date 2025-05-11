import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {RegisterComponent} from '../../_components/register/register.component';
import {UserService} from '../../../../_services/users/user.service';
import {UserModelForList} from '../../../../_models/user/user.model';

@Component({
  selector: 'app-home-page',
  imports: [
    FormsModule,
    RegisterComponent,
    NgIf,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  registerMode:boolean = false;
  users: UserModelForList[] = [];
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers();
    this.userService.usersList$.subscribe(data => {
      this.users = data;
    })
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }
}
