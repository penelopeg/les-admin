import { Component } from '@angular/core';
import { EditnewsService } from './editnews.service';
import { ActivatedRoute } from "@angular/router";

import 'style-loader!../news.scss';

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
      this.service.getAllTags().subscribe((value) => {
        //get all tags
        this.tags = value;
      }, (error) => {
        console.log(error);
      });

      this.service.getNews(params['id']).subscribe((value) => {
        var item = JSON.parse(value);
        this.content = item[0].content;
        this.title = item[0].title;
       //remove
        this.tags = JSON.parse(item[0].tags);
         //say which tags are selected
        var selectedTags = JSON.parse(item[0].tags);
        this.tags.forEach((item) => {
          for (var i = 0; i < selectedTags.length; i++) {
            if (selectedTags[i].id == item.id) {
              this.tags[this.tags.indexOf(item)].selected = '1';
              break;
            }
            else 
              this.tags[this.tags.indexOf(item)].selected = '0';
          }
        });
      }, (error) => {
        console.log(error);
      });

    });
  }

}
