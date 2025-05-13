import {Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {User} from '../../_models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = "https://localhost:5001/api/"

  private usersList: User[] = [];
  private usersListSubject = new BehaviorSubject<User[]>(this.usersList);

  private registerStatusSubject = new BehaviorSubject<string | null>(null);
  public registerStatus$: Observable<string | null> = this.registerStatusSubject.asObservable();

  public usersList$: Observable<User[]> = this.usersListSubject.asObservable();

  currentUser = signal<User | null>(null);


  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr : ToastrService
    ) {
  }

  getAllUsers() {
    this.http.get<any>(`${this.apiUrl}users`).subscribe(data => {
      data.forEach((d: any) => {
        this.usersList.push(d);
      })
      this.usersListSubject.next(this.usersList)
    })
  }

  registerUser(newUser: User) {
    this.http.post<User>(`${this.apiUrl}account/register`, newUser).subscribe(
      (response) => {
        this.registerStatusSubject.next('Registration successful');
        this.router.navigateByUrl('members');
        this.toastr.success('Registration successful');
      },
      (error) => {
        this.registerStatusSubject.next('Registration failed');
        this.toastr.error(error.error);
      }
    );
  }

  loginUser(user: User) {
    this.http.post<User>(`${this.apiUrl}account/login`, user).pipe(
        map((user) => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUser.set(user);
            this.router.navigateByUrl('members');
            this.toastr.success('Login successful');
          }
        })
      )
      .subscribe();
  }

  logoutUser(){
    localStorage.removeItem('user');
    this.currentUser.set(null);
    this.router.navigateByUrl('home');
  }
}
