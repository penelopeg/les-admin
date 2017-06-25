import { Routes, RouterModule }  from '@angular/router';
import { FeedbackanswerComponent } from './feedbackanswer.component';

const routes: Routes = [
  {
    path: '',
    component: FeedbackanswerComponent
  }
];

export const routing = RouterModule.forChild(routes);