import { Routes, RouterModule }  from '@angular/router';

import { AddserviceComponent } from './addservice.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AddserviceComponent
  }
];

export const routing = RouterModule.forChild(routes);
