import { Routes, RouterModule }  from '@angular/router';
import { ActivitiesComponent } from './activities.component';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent
  }
];

export const routing = RouterModule.forChild(routes);