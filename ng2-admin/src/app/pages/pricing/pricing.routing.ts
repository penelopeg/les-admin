import { Routes, RouterModule }  from '@angular/router';
import { PricingComponent } from './pricing.component';

const routes: Routes = [
  {
    path: '',
    component: PricingComponent
  }
];

export const routing = RouterModule.forChild(routes);