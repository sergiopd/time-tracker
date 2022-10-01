// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { TimeTrackerAppComponent } from './time-tracker-app.component';
import { ButtonTimeTrackerComponent } from './6-components/1-input/button-time-tracker/button-time-tracker.component';
import { DropdownSubmenuComponent } from './6-components/2-navigational/dropdown-submenu/dropdown-submenu.component';
import { DropdownMenuComponent } from './6-components/2-navigational/dropdown-menu/dropdown-menu.component';
import { ProfileSectionComponent } from './6-components/2-navigational/profile-section/profile-section.component';
import { TimeDisplayComponent } from './6-components/3-informational/time-display/time-display.component';

// Services

// Declarations
@NgModule({
  declarations: [
    TimeTrackerAppComponent,
    ButtonTimeTrackerComponent,
    DropdownSubmenuComponent,
    DropdownMenuComponent,
    ProfileSectionComponent,
    TimeDisplayComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [TimeTrackerAppComponent],
})
export class TimeTrackerAppModule {}
