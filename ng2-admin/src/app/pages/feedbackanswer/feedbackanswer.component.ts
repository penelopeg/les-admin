import { Component, ViewChild } from '@angular/core';
import { FeedbackanswerService } from './feedbackanswer.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ModalDirective } from 'ng2-bootstrap';

import 'style-loader!./feedbackanswer.scss';

@Component({
  selector: 'feedbackanswer',
  templateUrl: 'feedbackanswer.html'
})
export class FeedbackanswerComponent {
  query: string = '';

  feedbackanswer = [];
  modalinfo = '';

  constructor(protected service: FeedbackanswerService) {
    this.service.getFeedbackanswer().subscribe((value) => {
      JSON.parse(value).map((item) => {
        this.feedbackanswer.push(item);
      });
      console.log(this.feedbackanswer);
    }, (error) => {
      console.log(error);
    });

  }
ViewChild
  @ViewChild('childModal') childModal: ModalDirective;

  showChildModal(item): void {
    console.log(item);
    this.modalinfo = item;

    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

}