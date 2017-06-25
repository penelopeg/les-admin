import { Routes, RouterModule }  from '@angular/router';

import { EditmodulesComponent } from './editmodules.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: EditmodulesComponent
  }
];

export const routing = RouterModule.forChild(routes);
