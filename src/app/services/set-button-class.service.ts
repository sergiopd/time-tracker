import { Injectable } from '@angular/core';

@Injectable()
export class SetButtonClass {
  getInfoClass() {
    return BUTTONSINFO;
  }
}
const BUTTONSINFO = [
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
