import { Routes, RouterModule }  from '@angular/router';

import { EditeventComponent } from './editevent.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: EditeventComponent
  }
];

export const routing = RouterModule.forChild(routes);
