import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import {UserService} from '../_services/users/user.service';
import {ToastrService} from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const toastr = inject(ToastrService);

  if(userService.currentUser()){
    return true;
  }else{
    toastr.error('You shall not pass!');
    return false;
  }
};
