import { Component } from '@angular/core';
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
      },
      publish: {
        title: 'Data',
        type: 'string'
      }
      //images
      //news 2 tags
    }
  };

  source: LocalDataSource = new LocalDataSource();

  news = [];
  constructor(protected service: NewsService) {
    // this.service.getNews().subscribe((value) => {
    //   this.source.load(JSON.parse(value));
    // }, (error) => {
    //   console.log(error);
    // });
    this.service.getNews().subscribe((value) => {
      JSON.parse(value).map((item) => {
        this.news.push(item);
      });
    }, (error) => {
      console.log(error);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Quer mesmo eliminar a noticia?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}