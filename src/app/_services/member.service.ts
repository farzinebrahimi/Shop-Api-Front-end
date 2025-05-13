import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Member} from '../_models/user/member.model';
import {UserService} from './users/user.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private http: HttpClient = inject(HttpClient);
  private userService: UserService = inject(UserService)
  baseUrl: string = environment.apiUrl;

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'users', this.getHttpOptions());
  }

  getMember(username: string){
    return this.http.get<Member>(this.baseUrl + 'users/' + username, this.getHttpOptions());
  }

  getHttpOptions(){
    return{
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.userService.currentUser()?.token}`
      })
    }
  }
}
