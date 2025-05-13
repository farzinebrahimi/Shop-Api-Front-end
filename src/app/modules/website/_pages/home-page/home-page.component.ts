import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {RegisterComponent} from '../../_components/register/register.component';
import {TestErrorsComponent} from '../../../../shared/error/test-errors/test-errors.component';

@Component({
  selector: 'app-home-page',
  imports: [
    FormsModule,
    RegisterComponent,
    NgIf,
    TestErrorsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent{
  registerMode:boolean = false;

  registerToggle(){
    this.registerMode = !this.registerMode;
  }
  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }
}
