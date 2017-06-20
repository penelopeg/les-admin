import {Component} from '@angular/core';
import { EventsService } from './events.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./events.scss';

@Component({
  selector: 'events',
  templateUrl: 'events.html'
})
export class EventsComponent {
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
        title: 'Título do Evento',
        type: 'string'
      },
      desc: {
        title: 'Descrição',
        type: 'string'
      },
      e_time: {
        title: 'Data',
        type: 'datetime'
      }
    }
    /*
  events to tags
    */
  };

  source: LocalDataSource = new LocalDataSource();
  events = [];
  constructor(protected service: EventsService) {
    // this.service.getEvents().subscribe((value) => {
    //   this.source.load(JSON.parse(value));
    // }, (error) => {
    //   console.log(error);
    // });
    this.service.getEvents().subscribe((value) => {
      JSON.parse(value).map((item) => {
        this.events.push(item);
      });
    }, (error) => {
      console.log(error);
    });

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Quer mesmo eliminar o evento?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}