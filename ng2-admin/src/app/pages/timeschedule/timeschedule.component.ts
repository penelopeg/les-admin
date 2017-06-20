import { Component } from '@angular/core';
import { TimescheduleService } from './timeschedule.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./timeschedule.scss';

@Component({
  selector: 'timeschedule',
  templateUrl: 'timeschedule.html'
})
export class TimescheduleComponent {
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
      day: {
        title: 'Dia',
        type: 'string'
      },
      opening_hours: {
        title: 'Hora de abertura',
        type: 'time'
      },
      closing_hours: {
        title: 'Hora de fecho',
        type: 'time'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: TimescheduleService) {
    this.service.getSchedule().subscribe((value) => {
      this.source.load(JSON.parse(value));
    }, (error) => {
      console.log(error);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Quer mesmo eliminar o horário?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}