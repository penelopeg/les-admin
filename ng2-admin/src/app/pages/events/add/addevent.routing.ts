import { Routes, RouterModule }  from '@angular/router';

import { AddeventComponent } from './addevent.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AddeventComponent
  }
];

export const routing = RouterModule.forChild(routes);
