import { Routes, RouterModule }  from '@angular/router';

import { EditserviceComponent } from './editservice.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: EditserviceComponent
  }
];

export const routing = RouterModule.forChild(routes);
