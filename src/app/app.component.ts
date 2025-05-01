import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SharedButtonComponent} from './shared/shared-button/shared-button.component';
import {ProductList} from './_models/product/product.model';
import {ProductService} from './services/product.service';


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
  /*------- Constructor -------*/
  constructor(private  productService: ProductService){

  }


  /*------- Functions -------*/
  startFunc(){
    alert("App Started!");
    this.productService.getAllProducts().subscribe(data =>{
      this.productList = data;
    })
    console.log(JSON.stringify(this.productList));
  }
  cancelFunc(){
    alert("App Cancelled!");
  }
  /*------- Load Model -------*/
  productList: ProductList[] = [];




}
