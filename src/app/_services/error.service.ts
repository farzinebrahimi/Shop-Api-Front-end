import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  baseUrl: string = "https;//localhost:5001/api/";

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
      error: error => console.log(error)
    })
  }

}
