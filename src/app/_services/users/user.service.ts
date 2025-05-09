import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModelForList} from '../../_models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string ="http://localhost:5084/api/users"
  constructor(private http : HttpClient) { }

}
