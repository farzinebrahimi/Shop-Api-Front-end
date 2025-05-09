import {Component, inject, OnInit} from '@angular/core';
import {NgFor, NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SharedButtonComponent} from './shared/shared-button/shared-button.component';
import {ProductList} from './_models/product/product.model';
import {ProductService} from './_services/product.service';
import {UserModelForList} from './_models/user/user.model';
import {UserService} from './_services/users/user.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [
    NgForOf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  users: UserModelForList[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }
  trackById(index: number, item: any): number {
    return item.id;
  }


}
