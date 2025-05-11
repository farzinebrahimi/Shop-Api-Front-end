import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './_components/header/header.component';

@Component({
  selector: 'app-website',
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export class WebsiteComponent {

}
