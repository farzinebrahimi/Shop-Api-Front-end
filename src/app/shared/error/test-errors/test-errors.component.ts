import {Component, OnInit} from '@angular/core';
import {ErrorService} from '../../../_services/error.service';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-test-errors',
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css'
})
export class TestErrorsComponent implements OnInit{
  validationErrors$!: Observable<string[]>;

  constructor(public errorService: ErrorService) {
  }
  ngOnInit() {
    this.validationErrors$ = this.errorService.validationError$;
  }
  get400Error() {
    this.errorService.get400Error();
  }

  get401Error() {
    this.errorService.get401Error();
  }

  get404Error() {
    this.errorService.get404Error();
  }

  get500Error() {
    this.errorService.get500Error();
  }

  get400ValidationError() {
    this.errorService.get400ValidationError();
  }
}
