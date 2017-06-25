import { Routes, RouterModule }  from '@angular/router';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent
  }
];

export const routing = RouterModule.forChild(routes);