import { Injectable } from '@angular/core';
import { HttpHandler } from './http-handler.service';

@Injectable({
  providedIn: 'root',
})
export class HandleClickButton {
  constructor(private httpHandler: HttpHandler) {}

  dataFormServer: any;
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
  personSearched: Array<any> = [];
  dataJsonToSend: string = '';

  timesWorked = {
    currentWorkedTime: '00:00:00',
    finalTimeWorked: '00:00:00',
    workStatus: 'offline',
  };

  statusReport = {
    initialTime: '',
    finalTime: '',
    currentStatus: '',
  };

  // Utilizado en: Time to display
  sendTimeWorked() {
    return this.timesWorked;
  }

  myArray: any[] = [];

  infoToSendIn = {
    employeeId: '00371793-00ff-4ad9-86cc-41bf35b87ed0',
    workEntryIn: {
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
  };

  infoToSendOut = {
    employeeId: '013228f5-94dd-482e-9759-30da1048d48d',
    workEntryOut: {
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
  };

  // (LOCAL) Funcionamiento del cáculo del tiempo en línea
  displayTime(initialTime: number, oldSecWorked: number = 0): void {
    this.currentTime = new Date(Date.now()).getTime();
    this.workedTime = this.currentTime - initialTime + oldSecWorked;

    this.secWorked = Math.round(this.workedTime / 1000);

    this.hours = Math.floor(this.secWorked / 3600);
    this.minutes = Math.floor((this.secWorked % 3600) / 60);
    this.seconds = (this.secWorked % 3600) % 60;

    this.timesWorked.currentWorkedTime = this.convertTime(
      this.hours,
      this.minutes,
      this.seconds
    );

    /*
    this.hoursToDisplay = this.hours === 0 ? '0' + this.hours : this.hours;
    this.minutesToDisplay =
      this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.secondsToDisplay =
      this.seconds < 10 ? '0' + this.seconds : this.seconds;

    this.timesWorked.currentWorkedTime = `${this.hoursToDisplay}:${this.minutesToDisplay}:${this.secondsToDisplay}`;
*/
  }

  convertTime(hours: number, minutes: number, seconds: number) {
    let hoursToDisplay: any = 0;
    let minutesToDisplay: any = 0;
    let secondsToDisplay: any = 0;

    hoursToDisplay = hours === 0 ? '0' + hours.toString() : hours.toString();
    minutesToDisplay =
      minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    secondsToDisplay =
      seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return hoursToDisplay + ':' + minutesToDisplay + ':' + secondsToDisplay;
  }

  // Acionado por los botones a través de Time tracker
  countingTime(data: any) {
    // Do action indicated
    const buttonClicked = data.infoToApply.actionToApply;
    switch (buttonClicked) {
      case 'Pausar':
        clearInterval(this.interval);
        this.timesWorked.workStatus = 'paused';

        // Prueba de GET se despliega en consola

        this.findPerson('013228f5-94dd-482e-9759-30da1048d48d');
        this.displayPersonInfo(this.personSearched);

        break;

      case 'Entrar':
        this.interval = setInterval(
          this.displayTime.bind(this),
          1000,
          new Date(Date.now()).getTime(),
          this.workedTime
        );
        this.timesWorked.workStatus = 'online';

        this.httpHandler.getJson();
        this.dataFormServer = this.httpHandler.dataToSend;

        // Envío de fichado
        this.infoToSendIn.employeeId = '013228f5-94dd-482e-9759-30da1048d48d';
        this.dataJsonToSend = JSON.stringify(this.infoToSendIn);
        this.httpHandler.postData(this.dataJsonToSend, 'In');

        break;

      case 'Salir':
        clearInterval(this.interval);
        this.timesWorked.finalTimeWorked = this.timesWorked.currentWorkedTime;
        this.workedTime = 0;
        this.timesWorked.workStatus = 'offline';

        // Envío de desfichado
        this.infoToSendOut.employeeId = '013228f5-94dd-482e-9759-30da1048d48d';
        this.dataJsonToSend = JSON.stringify(this.infoToSendOut);
        this.httpHandler.postData(this.dataJsonToSend, 'Out');

        break;
    }
  }

  // Para la manipulación de los datos recibidos
  // Extrae el objeto de la persona buscada
  findPerson(id: string) {
    this.myArray = JSON.parse(this.dataFormServer);
    this.personSearched = this.myArray.find(
      (element: any) => (element.id = id)
    );
    console.log(this.personSearched);
  }

  // Extrae la información de la persona
  displayPersonInfo(person: any) {
    console.log(`
    Inició a las: ${person.workEntryIn.date}
    Terminó: ${person.workEntryOut.date}
    Status: ${person.employee.workStatus}`);
  }
}
