import { Component, ViewChild } from '@angular/core';
import { VisitsService } from './visits.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ModalDirective } from 'ng2-bootstrap';

import 'style-loader!./visits.scss';

@Component({
  selector: 'visits',
  templateUrl: 'visits.html'
})
export class VisitsComponent {
  query: string = '';

  visits = [];
  modalinfo = '';

  constructor(protected service: VisitsService) {
    this.service.getVisits().subscribe((value) => {
      JSON.parse(value).map((item) => {
        this.visits.push(item);
      });
    }, (error) => {
      console.log(error);
    });

  }
ViewChild
  @ViewChild('childModal') childModal: ModalDirective;

  showChildModal(item): void {
    this.modalinfo = item;

    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

}