import { Component } from '@angular/core';
import {ErrorService} from '../../../_services/error.service';

@Component({
  selector: 'app-test-errors',
  imports: [],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css'
})
export class TestErrorsComponent {


  constructor(private errorService: ErrorService) {}

  get400Error(){
    this.errorService.get400Error();
  }
  get401Error(){
    this.errorService.get401Error();
  }
  get404Error(){
    this.errorService.get404Error();
  }
  get500Error(){
    this.errorService.get500Error();
  }
  get400ValidationError(){
    this.errorService.get400ValidationError();
  }
}
