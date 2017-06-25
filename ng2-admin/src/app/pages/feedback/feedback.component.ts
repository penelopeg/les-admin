import { Component } from '@angular/core';
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
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    mode: 'inline',
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false
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
      this.service.deleteForm(event.data.id).subscribe(
        data => {
          console.log(data);
          event.confirm.resolve();
        },
        error => {
          console.error("Error saving event!");
          event.confirm.reject();
        }
      );
    } else {
      event.confirm.reject();
    }
  }

  onSave(event): any {
    this.service.updateForm(event.newData).subscribe(
      data => {
        console.log(data);
        event.confirm.resolve();
      },
      error => {
        console.error("Error saving event!");
        event.confirm.reject();
      }
    );
  }

  onCreate(event): any {
    // var question = {question: event.newData.question};
    this.service.createForm(event.newData.question).subscribe(
      data => {
        console.log(data);
        event.confirm.resolve();
      },
      error => {
        console.error("Error saving event!");
        event.confirm.reject();
      }
    );
  }
}