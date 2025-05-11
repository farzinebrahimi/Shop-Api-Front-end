import {Component, OnInit} from '@angular/core';
import {UserModelForList} from './_models/user/user.model';
import {UserService} from './_services/users/user.service';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  users: UserModelForList[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {

  }


  trackById(index: number, item: any): number {
    return item.id;
  }


}
