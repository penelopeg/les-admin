import { Routes, RouterModule }  from '@angular/router';
import { ThemesComponent } from './themes.component';

const routes: Routes = [
  {
    path: '',
    component: ThemesComponent
  }
];

export const routing = RouterModule.forChild(routes);