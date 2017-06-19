import {Component} from '@angular/core';
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
      id: {
        title: 'ID',
        type: 'number'
      },
      day: {
        title: 'Dia',
        type: 'string'
      },
      opening: {
        title: 'Hora de abertura',
        type: 'time'
      },
      closing: {
        title: 'Hora de fecho',
        type: 'time'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: TimescheduleService) {
    this.service.getData().then((data) => {
      this.source.load(data);
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