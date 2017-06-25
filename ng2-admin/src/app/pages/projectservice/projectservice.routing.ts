import { Routes, RouterModule }  from '@angular/router';
import { ProjectserviceComponent } from './projectservice.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectserviceComponent
  }
];

export const routing = RouterModule.forChild(routes);