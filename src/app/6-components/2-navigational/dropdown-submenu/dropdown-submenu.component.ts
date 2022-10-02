import { Component, Input } from '@angular/core';

@Component({
  selector: 'dropdown-submenu-component',
  templateUrl: './dropdown-submenu.component.html',
  styleUrls: ['./dropdown-submenu.component.scss'],
})
export class DropdownSubmenuComponent {
  @Input() hideSubmenu: any;
}
