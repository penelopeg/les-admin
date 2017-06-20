import { Routes, RouterModule }  from '@angular/router';

import { AddnewComponent } from './addnew.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AddnewComponent
  }
];

export const routing = RouterModule.forChild(routes);
