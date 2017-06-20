import { Routes, RouterModule }  from '@angular/router';
import { SocialComponent } from './social.component';

const routes: Routes = [
  {
    path: '',
    component: SocialComponent
  }
];

export const routing = RouterModule.forChild(routes);