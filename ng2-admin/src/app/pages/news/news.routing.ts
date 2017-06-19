import { Routes, RouterModule }  from '@angular/router';
import { NewsComponent } from './news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  }
];

export const routing = RouterModule.forChild(routes);