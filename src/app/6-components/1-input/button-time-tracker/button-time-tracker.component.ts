import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-time-tracker',
  templateUrl: './button-time-tracker.component.html',
  styleUrls: ['./button-time-tracker.component.scss'],
})
export class ButtonTimeTrackerComponent {
  @Input() classSelected: any;
  @Input() infoToApply: any;

  @Output() eventClick = new EventEmitter();

  pauseCounter() {
    this.eventClick.emit(this.infoToApply);
  }
}
