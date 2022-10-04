import { Component, Input, OnInit } from '@angular/core';
import { HandleClickButton } from '../../../services/handle-click-button.service';
@Component({
  selector: 'time-display-component',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnInit {
  @Input() timeToBeDisplayed: any;

  constructor(private handleClickButton: HandleClickButton) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.timeToBeDisplayed = this.handleClickButton.sendTimeWorked();
  }
}
