import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SharedButtonComponent} from './shared/shared-button/shared-button.component';
import {ProductList} from './_models/product/product.model';
import {ProductService} from './_services/product.service';
import {UserModelForList} from './_models/user/user.model';
import {UserService} from './_services/users/user.service';


@Component({
  selector: 'app-root',
  imports: [NgFor, RouterLink, SharedButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {


}
