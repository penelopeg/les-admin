import {Component} from '@angular/core';
import { NewsService } from './news.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./news.scss';

@Component({
  selector: 'news',
  templateUrl: 'news.html'
})
export class NewsComponent {
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
      title: {
        title: 'Título',
        type: 'string'
      },
      content: {
        title: 'Conteúdo',
        type: 'string'
      }
      //images
      //news 2 tags
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: NewsService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

    // constructor(protected service: NewsService) {
    // this.service.getTags().then((data) => {
    //   this.source.load(data);
    // });
    // }

  onDeleteConfirm(event): void {
    if (window.confirm('Quer mesmo eliminar a not]icia?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}