import { Routes, RouterModule }  from '@angular/router';
import { TimescheduleComponent } from './timeschedule.component';

const routes: Routes = [
  {
    path: '',
    component:TimescheduleComponent
  }
];

export const routing = RouterModule.forChild(routes);