import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-section-component',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss'],
})
export class ProfileSectionComponent {
  @Input() userStatus: string = 'offline';
  displayChild: any = false;

  changeStatusMenu(el: any) {
    setTimeout(() => {
      this.displayChild = !this.displayChild;
    }, 500);
  }

  changeClickStatusMenu(el: any) {
    el.stopPropagation();
    this.displayChild = !this.displayChild;
  }
}
