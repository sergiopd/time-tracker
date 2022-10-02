import { Injectable } from '@angular/core';

@Injectable()
export class CalcWorkedTime {
  buttonsInfo = [
    {
      idToApply: 'pause',
      classToApply: 'button-time-tracker -pause',
      actionToApply: 'Pausar',
      active: false,
    },
    {
      idToApply: 'start',
      classToApply: 'button-time-tracker -start',
      actionToApply: 'Entrar',
      active: true,
    },
    {
      idToApply: 'stop',
      classToApply: 'button-time-tracker -stop',
      actionToApply: 'Salir',
      active: false,
    },
  ];

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
  workedTimeLocal: string = '';

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

    this.workedTimeLocal = `${this.hoursToDisplay}:${this.minutesToDisplay}:${this.secondsToDisplay}`;
    console.log(
      `${this.workedTimeLocal}, y este es el worked time: ${this.workedTime}`
    );
  }

  handleEventClicked(data: any) {
    // Toggle classes in buttons
    if (data) {
      for (let index of this.buttonsInfo) {
        index.active = !index.active;
      }
    }

    const buttonClicked = data.infoToApply.actionToApply;
    switch (buttonClicked) {
      case 'Pausar':
        pauseCounter();
        clearInterval(this.interval);
        break;
      case 'Entrar':
        console.log(this.workedTime);
        startCouter();
        this.interval = setInterval(
          this.displayTime,
          1000,
          new Date(Date.now()).getTime(),
          this.workedTime
        );
        console.log(this.workedTime);
        break;
      case 'Salir':
        stopCounter();
        clearInterval(this.interval);
        break;
    }
    function startCouter() {
      console.log('Iniciando contador');
    }

    function pauseCounter() {
      console.log('Pausando el contador');
    }

    function stopCounter() {
      console.log('Deteniendo contador');
    }
  }
}
