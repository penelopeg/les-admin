import { Component } from '@angular/core';
import { EditnewsService } from './editnews.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'editnews',
  templateUrl: './editnews.html',
  
})
export class EditnewsComponent {
  content = '';
  title = '';
  tags = [];

  constructor(protected service: EditnewsService, private _routeParams: ActivatedRoute) {
    this._routeParams.params.subscribe(params => {
      this.service.getNews(params['id']).subscribe((value) => {
      var item = JSON.parse(value);
      this.content = item[0].content;
      this.title = item[0].title;
      this.tags = item[0].tags;
    }, (error) => {
      console.log(error);
    });  
  });
  }

}
