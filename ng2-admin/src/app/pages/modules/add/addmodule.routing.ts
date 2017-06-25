import { Routes, RouterModule }  from '@angular/router';

import { AddmoduleComponent } from './addmodule.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AddmoduleComponent
  }
];

export const routing = RouterModule.forChild(routes);
