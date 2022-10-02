import { Component, OnInit } from '@angular/core';

// Services
import { SetButtonClass } from './services/set-button-class.service';
import { HandleClickButton } from './services/handle-click-button.service';

@Component({
  selector: 'time-tracker-app',
  templateUrl: './time-tracker-app.component.html',
  styleUrls: ['./time-tracker-app.component.scss'],
})
export class TimeTrackerAppComponent implements OnInit {
  title = 'time-tracker';

  buttonsInfo: any[] = [];
  onOffstatus: string = 'offline';

  constructor(
    private setButtonClass: SetButtonClass,
    private handleClickButton: HandleClickButton
  ) {}
  ngOnInit() {
    this.buttonsInfo = this.setButtonClass.getInfoClass();
  }

  /* timesToDisplay = {
    workedTime: '00:00:00',
    timeAcum: '00:00:00',
    status: 'offline',
  }; */

  prueba: any;

  handleEventClicked(data: any) {
    // Toggle classes in buttons
    if (data) {
      for (let index of this.buttonsInfo) {
        index.active = !index.active;
      }
    }

    this.handleClickButton.countingTime(data);
    /* this.timesToDisplay = {
      workedTime: this.handleClickButton.timesWorked.currentWorkedTime,
      timeAcum: this.handleClickButton.timesWorked.finalTimeWorked,
      status: this.handleClickButton.timesWorked.status,
      this.onOffstatus = this.timesToDisplay.status;
    }; */

    this.onOffstatus = this.handleClickButton.timesWorked.workStatus;
  }
}
