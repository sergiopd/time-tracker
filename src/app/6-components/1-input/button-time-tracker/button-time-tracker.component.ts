import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-time-tracker',
  templateUrl: './button-time-tracker.component.html',
  styleUrls: ['./button-time-tracker.component.scss'],
})
export class ButtonTimeTrackerComponent {
  @Input() infoToApply: any;
  @Output() eventClick = new EventEmitter();

  handleClickButton() {
    this.eventClick.emit(this);
  }
}
