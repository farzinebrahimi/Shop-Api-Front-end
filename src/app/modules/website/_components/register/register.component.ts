import {Component, input} from '@angular/core';
import {UserModelForCreate, UserModelForList} from '../../../../_models/user/user.model';
import {UserService} from '../../../../_services/users/user.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userFromHomeComponent = input.required<UserModelForList[]>();
  userRegister: UserModelForCreate = new UserModelForCreate();

  constructor(private userService: UserService) {}

  registerUser(){
    this.userService.registerUser(this.userRegister);
  }

  cancel(){

  }
}
