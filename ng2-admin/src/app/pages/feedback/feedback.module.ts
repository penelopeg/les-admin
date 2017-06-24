import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { routing } from './feedback.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {FeedbackService} from './feedback.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule
  ],
  declarations: [
    FeedbackComponent
  ],
  providers: [FeedbackService]
})
export class FeedbackModule {}