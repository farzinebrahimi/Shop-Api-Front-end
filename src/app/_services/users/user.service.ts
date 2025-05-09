import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string ="http://localhost:5084/api/"
  constructor(private http : HttpClient) { }
  
  getAllUsers(): Observable<any>
}
