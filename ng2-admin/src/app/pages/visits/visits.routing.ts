import { Routes, RouterModule }  from '@angular/router';
import { VisitsComponent } from './visits.component';

const routes: Routes = [
  {
    path: '',
    component: VisitsComponent
  }
];

export const routing = RouterModule.forChild(routes);