import { Component, Output } from '@angular/core';

@Component({
  selector: 'time-tracker-app',
  templateUrl: './time-tracker-app.component.html',
  styleUrls: ['./time-tracker-app.component.scss'],
})
export class TimeTrackerAppComponent {
  title = 'time-tracker';

  buttonsInfo = [
    {
      idToApply: 'pause',
      classToApply: 'button-time-tracker -pause -inactive',
      actionToApply: 'Pausar',
    },
    {
      idToApply: 'start',
      classToApply: 'button-time-tracker -start',
      actionToApply: 'Entrar',
    },
    {
      idToApply: 'stop',
      classToApply: 'button-time-tracker -stop -inactive',
      actionToApply: 'Salir',
    },
  ];

  handleEventClicked(data: any) {
    switch (data) {
      case 'Pausar':
        console.log(`Seleccionaste PAUSAR`);
        break;
      case 'Entrar':
        console.log(`Seleccionaste ENTRAR`);
        break;
      case 'Salir':
        console.log(`Seleccionaste SALIR`);
        break;
      default:
        break;
    }
  }

  classSelected() {
    return 'button-time-tracker';
  }

  /*
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const buttonStart = document.querySelector('#start');
    const pauseTime = document.querySelector('#pause');
    const stopTime = document.querySelector('#stop');
    const timeAcum = document.querySelector('#counterAcum');
    let interval = null;
    let workedTime = 0;
    let totalTimeWorked = 0;

    buttonStart.addEventListener('click', startCouter);
    pauseTime.addEventListener('click', pauseCounter);
    stopTime.addEventListener('click', stopCounter);

    function startCouter() {
      const startTime = new Date(Date.now());
      interval = setInterval(displayTime, 1000, startTime, workedTime);
      buttonStart.classList.toggle('-inactive');
      pauseTime.classList.toggle('-inactive');
      stopTime.classList.toggle('-inactive');
      timeAcum.classList.toggle('-inactive');
    }

    function pauseCounter() {
      clearInterval(interval);
      buttonStart.classList.toggle('-inactive');
      pauseTime.classList.toggle('-inactive');
      stopTime.classList.toggle('-inactive');
      timeAcum.classList.toggle('-inactive');
    }

    function stopCounter() {
      clearInterval(interval);
      totalTimeWorked = workedTime;
      console.log(totalTimeWorked);
      workedTime = 0;
      buttonStart.classList.toggle('-inactive');
      pauseTime.classList.toggle('-inactive');
      timeAcum.classList.toggle('-inactive');
      stopTime.classList.toggle('-inactive');
    }

    function displayTime(initialTime, oldSecWorked = 0) {
      let currentTime = new Date(Date.now());
      workedTime = currentTime - initialTime + oldSecWorked;

      let secWorked = Math.round(workedTime / 1000);

      let hours = Math.floor(secWorked / 3600);
      let minutes = Math.floor((secWorked % 3600) / 60);
      let seconds = (secWorked % 3600) % 60;

      let hoursToDisplay = hours === 0 ? '0' + hours : hours;
      let minutesToDisplay = minutes < 10 ? '0' + minutes : minutes;
      let secondsToDisplay = seconds < 10 ? '0' + seconds : seconds;

      document.querySelector(
        '#counterWorked'
      ).textContent = `${hoursToDisplay}:${minutesToDisplay}:${secondsToDisplay}`;
      document.querySelector(
        '#counterAcum'
      ).textContent = `/   ${hours}:${minutes}:${seconds}`;
    }
  } */
}
