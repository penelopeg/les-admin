import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FeedbackanswerComponent } from './feedbackanswer.component';
import { routing } from './feedbackanswer.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {FeedbackanswerService} from './feedbackanswer.service';
import { HttpModule } from '@angular/http';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    HttpModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    FeedbackanswerComponent
  ],
  providers: [FeedbackanswerService]
})
export class FeedbackanswerModule {}