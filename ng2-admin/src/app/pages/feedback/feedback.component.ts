import {Component} from '@angular/core';
import { FeedbackService } from './feedback.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./feedback.scss';

@Component({
  selector: 'feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackComponent {
    query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      question: {
        title: 'Pergunta',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: FeedbackService) {
        this.service.getFormQuestions().subscribe((value) => {
      this.source.load(JSON.parse(value));
    }, (error) => {
      console.log(error);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Quer mesmo eliminar a pergunta?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}