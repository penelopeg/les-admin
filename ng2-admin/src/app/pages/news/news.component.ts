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

  source: LocalDataSource = new LocalDataSource();

  tags = '';
  news = [];
  constructor(protected service: NewsService) {
    this.service.getNews().subscribe((value) => {
      JSON.parse(value).map((item) => {
        var tag = JSON.parse(item.tags);
        var selectedtags = '';
        if (tag != null) {
          tag.forEach((val) => {
            selectedtags = selectedtags.concat(' ' + val.name);
          });
        }
        Object.assign(item, { selectedtags: selectedtags });
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