import {Component} from '@angular/core';
import { ActivitiesService } from './activities.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./activities.scss';

@Component({
  selector: 'activities',
  templateUrl: 'activities.html'
})
export class ActivitiesComponent {
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
      name: {
        title: 'Nome da Atividade',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ActivitiesService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Quer mesmo eliminar a atividade?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}