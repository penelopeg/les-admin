import { Component } from '@angular/core';
import { EditeventService } from './editevent.service';
import { ActivatedRoute, Router } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import 'style-loader!../events.scss';

@Component({
  selector: 'editevent',
  templateUrl: './editevent.html',

})
export class EditeventComponent {
  name = '';
  description = '';
  e_time = '';
  tags = [];
  selecttags = [];
  id = '';
  model = { id: this.id, name: this.name, description: this.description, e_time: this.e_time, selecttags: this.selecttags };

  constructor(protected service: EditeventService, private _routeParams: ActivatedRoute, private _router: Router) {
    this._routeParams.params.subscribe(params => {
      this.service.getAllTags().subscribe((value) => {
        //get all tags
        this.tags = JSON.parse(value);
      }, (error) => {
        console.log(error);
      });
      this.service.getEvents(params['id']).subscribe((value) => {
        var item = JSON.parse(value);
        this.id = params['id'];
        this.description = item[0].desc;
        this.name = item[0].name;
        this.e_time = item[0].e_time;
        //say which tags are selected
        this.selecttags = JSON.parse(item[0].tags);
        this.model = { id: this.id, name: this.name, description: this.description, e_time: this.e_time, selecttags: this.selecttags };
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
    this.service.updateEvent(this.model).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['pages/events']);
      },
      error => {
        console.error("Error saving event!");
      }
    );
  }

  delete() {
    if (confirm("Quer mesmo eliminar o evento?")) {
      this.service.deleteEvent(this.id).subscribe(
        data => {
          this._router.navigate(['pages/events']);
        },
        error => {
          console.error("Error deleting event!");
        }
      );
    }
  }




}
