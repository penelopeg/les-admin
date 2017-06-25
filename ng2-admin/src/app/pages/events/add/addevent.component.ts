import { Component } from '@angular/core';
import { AddeventService } from './addevent.service';
import { ActivatedRoute, Router } from "@angular/router";
import 'style-loader!../events.scss';

@Component({
  selector: 'addevent',
  templateUrl: './addevent.html',
})
export class AddeventComponent {
  description = '';
  name = '';
  tags = [];
  selecttags = [];
  e_time = ""; //2009-01-01 09:00:00

  constructor(protected service: AddeventService, private _routeParams: ActivatedRoute, private _router: Router) {
    this._routeParams.params.subscribe(params => {
      this.service.getAllTags().subscribe((value) => {
        //get all tags
        this.tags = JSON.parse(value);
      }, (error) => {
        console.log(error);
      });
    });
  }
  model = { name: this.name, description: this.description, e_time: this.e_time, selecttags: this.selecttags };
  onSubmit() {
    this.service.createEvent(this.model).subscribe(
      data => {
        this._router.navigate(['pages/events']);
      },
      error => {
        console.error("Error saving event!");
      }
    );
  }

}
