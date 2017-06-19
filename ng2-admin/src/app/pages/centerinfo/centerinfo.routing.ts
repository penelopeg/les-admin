import { Routes, RouterModule }  from '@angular/router';

import { CenterinfoComponent } from './centerinfo.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CenterinfoComponent
  }
];

export const routing = RouterModule.forChild(routes);
