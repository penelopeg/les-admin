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
    actions: {
      add: false,
      delete: false
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
    },
    mode: 'inline',
    columns: {
      id: {
        title: 'Id',
        type: 'string',
        editable: false
      },
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

  onSave(event): any {
    this.service.updateSchedule(event.newData).subscribe(
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