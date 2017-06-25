import { Component } from '@angular/core';
import { EditnewsService } from './editnews.service';
import { ActivatedRoute, Router } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import 'style-loader!../news.scss';

@Component({
  selector: 'editnews',
  templateUrl: './editnews.html',

})
export class EditnewsComponent {
  content = '';
  title = '';
  tags = [];
  selecttags = [];
  id = '';
  publish_time = '';
  model = { id: this.id, title: this.title, content: this.content, publish_time: this.publish_time, selecttags: this.selecttags };


  constructor(protected service: EditnewsService, private _routeParams: ActivatedRoute, private _router: Router) {
    this._routeParams.params.subscribe(params => {
      this.service.getAllTags().subscribe((value) => {
        //get all tags
        this.tags = JSON.parse(value);
      }, (error) => {
        console.log(error);
      });

      this.service.getNews(params['id']).subscribe((value) => {
        var item = JSON.parse(value);
        this.id = params['id'];
        this.content = item[0].content;
        this.title = item[0].title;
        this.publish_time = item[0].publish;
        //say which tags are selected
        this.selecttags = JSON.parse(item[0].tags);
        this.model = { id: this.id, title: this.title, content: this.content, publish_time: this.publish_time, selecttags: this.selecttags };
        this.tags.forEach((item) => {
          for (var i = 0; i < this.selecttags.length; i++) {
            if (this.selecttags[i].id == item.id) {
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

  onSubmit() {
    this.service.updateNews(this.model).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['pages/news']);
      },
      error => {
        console.error("Error saving news!");
      }
    );
  }

  delete() {
    if (confirm("Quer mesmo eliminar o evento?")) {
      this.service.deleteNews(this.id).subscribe(
        data => {
          this._router.navigate(['pages/news']);
        },
        error => {
          console.error("Error deleting news!");
        }
      );
    }
  }

}
