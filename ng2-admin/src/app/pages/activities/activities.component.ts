import { Component } from '@angular/core';
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
      name: {
        title: 'Nome da Atividade',
        type: 'string'
      },
      color: {
        title: 'Cor',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ActivitiesService) {
    this.service.getAllTags().subscribe((value) => {
      this.source.load(JSON.parse(value));
    }, (error) => {
      console.log(error);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Quer mesmo eliminar a atividade?')) {
      this.service.deleteTag(event.data.id).subscribe(
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
    this.service.updateTag(event.newData).subscribe(
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
    var tag = { name: event.newData.name, color: event.newData.color };
    this.service.createTag(tag).subscribe(
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