import {Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {UserModelForCreate, UserModelForList} from '../../_models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = "https://localhost:5001/api/"

  private usersList: UserModelForList[] = [];
  private usersListSubject = new BehaviorSubject<UserModelForList[]>(this.usersList);

  private registerStatusSubject = new BehaviorSubject<string | null>(null);
  public registerStatus$: Observable<string | null> = this.registerStatusSubject.asObservable();

  public usersList$: Observable<UserModelForList[]> = this.usersListSubject.asObservable();

  currentUser = signal<UserModelForCreate | null>(null);


  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    this.http.get<any>(`${this.apiUrl}users`).subscribe(data => {
      data.forEach((d: any) => {
        this.usersList.push(d);
      })
      this.usersListSubject.next(this.usersList)
    })
  }

  registerUser(newUser: UserModelForCreate) {
    this.http.post<UserModelForCreate>(`${this.apiUrl}account/register`, newUser).subscribe(
      (response) => {
        this.registerStatusSubject.next('Registration successful');
      },
      (error) => {
        this.registerStatusSubject.next('Registration failed');
      }
    );
  }

  loginUser(user: UserModelForCreate) {
    this.http.post<UserModelForCreate>(`${this.apiUrl}account/login`, user).pipe(
      map(user => {
        if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.set(user);
        }
      })
    )
  }

  logoutUser(){
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
