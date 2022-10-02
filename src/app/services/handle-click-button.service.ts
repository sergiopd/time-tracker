import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HandleClickButton {
  constructor() {}

  interval: any = null;
  currentTime: number = 0;
  workedTime: number = 0;
  secWorked: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  hoursToDisplay: string | number = 0;
  minutesToDisplay: string | number = 0;
  secondsToDisplay: string | number = 0;
  workedTimeAcum: string = '';

  timesWorked = {
    currentWorkedTime: '00:00:00',
    finalTimeWorked: '00:00:00',
    workStatus: 'offline',
  };

  /*
  {
  "employeeId": "string",
  "workEntryIn" / "workEntryOut": {
    "coordinates": {
      "latitude": 0,
        longitude": 0
      }
    }
  }
*/

  sendTimeWorked() {
    return this.timesWorked;
  }

  // Funcionamiento del registro del tiempo
  displayTime(initialTime: number, oldSecWorked: number = 0): void {
    this.currentTime = new Date(Date.now()).getTime();
    this.workedTime = this.currentTime - initialTime + oldSecWorked;

    this.secWorked = Math.round(this.workedTime / 1000);

    this.hours = Math.floor(this.secWorked / 3600);
    this.minutes = Math.floor((this.secWorked % 3600) / 60);
    this.seconds = (this.secWorked % 3600) % 60;

    this.hoursToDisplay = this.hours === 0 ? '0' + this.hours : this.hours;
    this.minutesToDisplay =
      this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.secondsToDisplay =
      this.seconds < 10 ? '0' + this.seconds : this.seconds;

    this.timesWorked.currentWorkedTime = `${this.hoursToDisplay}:${this.minutesToDisplay}:${this.secondsToDisplay}`;

    // TODO (sergio_p_d): Borrar el console.log de abajo
    console.log(
      `${this.timesWorked.finalTimeWorked}, y este es el worked time: ${this.timesWorked.currentWorkedTime}`
    );
  }

  countingTime(data: any) {
    // Do action indicated
    const buttonClicked = data.infoToApply.actionToApply;
    switch (buttonClicked) {
      case 'Pausar':
        clearInterval(this.interval);
        this.timesWorked.workStatus = 'paused';
        break;
      case 'Entrar':
        this.interval = setInterval(
          this.displayTime.bind(this),
          1000,
          new Date(Date.now()).getTime(),
          this.workedTime
        );
        this.timesWorked.workStatus = 'online';
        break;
      case 'Salir':
        clearInterval(this.interval);
        this.timesWorked.finalTimeWorked = this.timesWorked.currentWorkedTime;
        this.workedTime = 0;
        this.timesWorked.workStatus = 'offline';
        break;
    }
  }
}
