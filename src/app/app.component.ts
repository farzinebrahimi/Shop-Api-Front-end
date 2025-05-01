import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SharedButtonComponent} from './modules/shared/shared-button/shared-button.component';

@Component({
  selector: 'app-root',
  imports: [NgFor, RouterLink, SharedButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*------- Array -------*/
  headerItems = [
    {title: 'HOME', urlLink:'/home', icon: '*'},
    {title: 'GALLERY', urlLink:'/gallery', icon: '*'},
    {title: 'ABOUT US', urlLink:'/about', icon: '*'},
    {title: 'CONTACT US', urlLink:'/contact', icon: '*'}
  ]
  /*------- Nested Array -------*/
  products = [
    {title: 'product1', images:{image1:'image1', image2:'image2'},}
  ]

  /*------- Functions -------*/
  startFunc(){
    alert("App Started!");
  }
  cancelFunc(){
    alert("App Cancelled!");
  }

}
