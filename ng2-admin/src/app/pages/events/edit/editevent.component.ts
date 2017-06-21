import { Component } from '@angular/core';
import { EditeventService } from './editevent.service';
import { ActivatedRoute } from "@angular/router";

import 'style-loader!../events.scss';

@Component({
  selector: 'editevent',
  templateUrl: './editevent.html',

})
export class EditeventComponent {
  name = '';
  desc = '';
  e_time ='';
  tags = [];

  constructor(protected service: EditeventService, private _routeParams: ActivatedRoute) {
    this._routeParams.params.subscribe(params => {
      this.service.getAllTags().subscribe((value) => {
        //get all tags
        this.tags = value;
      }, (error) => {
        console.log(error);
      });

      this.service.getEvents(params['id']).subscribe((value) => {
        var item = JSON.parse(value);
        this.desc = item[0].desc;
        this.name = item[0].name;
        this.e_time = item[0].e_time; 
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
