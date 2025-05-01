import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-shared-button',
  imports: [],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.css'
})
export class SharedButtonComponent {
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  @Input() title: string = '';
  @Input() bgColor: string = '';
  @Input() borderColor: string = '';
  @Input() hoverBgColor: string = '';

  clickButton(){
    this.buttonClicked.emit('');
  }

}
