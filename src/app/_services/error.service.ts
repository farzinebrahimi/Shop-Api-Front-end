import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  baseUrl: string = environment.apiUrl;
  validationError:string[] = [];

  validationErrorSubject = new BehaviorSubject<string[]>(this.validationError);
   public validationError$: Observable<string[]> = this.validationErrorSubject.asObservable();

  constructor(private http: HttpClient) { }

  get400Error(){
    this.http.get(`${this.baseUrl}buggy/bad-request`).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }
  get401Error(){
    this.http.get(`${this.baseUrl}buggy/auth`).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }
  get404Error(){
    this.http.get(`${this.baseUrl}buggy/not-found`).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }
  get500Error(){
    this.http.get(`${this.baseUrl}buggy/server-error`).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }
  get400ValidationError(){
    this.http.post(`${this.baseUrl}account/register`,{}).subscribe({
      next: response => console.log(response),
      error: error => {
        console.log(error)
       this.validationError = error;
        console.log(this.validationError);
        this.validationErrorSubject.next(this.validationError);
      }
    })
  }

}
