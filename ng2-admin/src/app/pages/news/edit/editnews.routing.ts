import { Routes, RouterModule }  from '@angular/router';

import { EditnewsComponent } from './editnews.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: EditnewsComponent
  }
];

export const routing = RouterModule.forChild(routes);
