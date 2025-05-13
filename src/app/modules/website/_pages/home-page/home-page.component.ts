import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {RegisterComponent} from '../../_components/register/register.component';
import {UserService} from '../../../../_services/users/user.service';
import {UserModelForList} from '../../../../_models/user/user.model';
import {TestErrorsComponent} from '../../../../shared/error/test-errors/test-errors.component';

@Component({
  selector: 'app-home-page',
  imports: [
    FormsModule,
    RegisterComponent,
    NgIf,
    TestErrorsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  /*-------Injection-------*/
  userService: UserService = inject(UserService)

  registerMode:boolean = false;
  users: UserModelForList[] = [];
  constructor() {}

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
