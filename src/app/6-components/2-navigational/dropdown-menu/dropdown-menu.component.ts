import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'dropdown-menu-component',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent {
  @Input() hideMenu: any;
  @Output() menuMouseLeave = new EventEmitter();

  displayChildMisCuentas: boolean = false;
  displayChildVistaEmpleado: boolean = false;
  displayChildMiPerfil: boolean = false;
  displayChildCerrarSesión: boolean = false;

  changeStatusSubmenu(el: any) {
    if (el.childNodes[0].textContent === 'Mis cuentas') {
      this.displayChildMisCuentas = !this.displayChildMisCuentas;
    }
  }

  changeClickStatusSubmenu(el: any) {
    el.stopPropagation();
    if (el.childNodes[0].textContent === 'Mis cuentas') {
      this.displayChildMisCuentas = !this.displayChildMisCuentas;
    }
  }

  hideSubmenuOnLeave(el: any) {
    switch (el.childNodes[0].textContent) {
      case 'Mis cuentas':
        setTimeout(
          () => (this.displayChildMisCuentas = !this.displayChildMisCuentas),
          500
        );
        break;
      case 'Vista empleado':
        setTimeout(
          () =>
            (this.displayChildVistaEmpleado = !this.displayChildVistaEmpleado),
          500
        );
        break;
      case 'Mi perfil':
        setTimeout(
          () => (this.displayChildMiPerfil = !this.displayChildMiPerfil),
          500
        );
        break;
      case 'Cerrar sesión':
        setTimeout(
          () =>
            (this.displayChildCerrarSesión = !this.displayChildCerrarSesión),
          500
        );
        break;
    }
  }
}
