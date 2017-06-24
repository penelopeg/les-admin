import { Component } from '@angular/core';
import { AddeventService } from './addevent.service';
import { ActivatedRoute } from "@angular/router";
import 'style-loader!../events.scss';

@Component({
  selector: 'addevent',
  templateUrl: './addevent.html',
})
export class AddeventComponent {
  content = '';
  title = '';
  tags = [];

  constructor(protected service: AddeventService, private _routeParams: ActivatedRoute) {
    this._routeParams.params.subscribe(params => {
      this.service.getAllTags().subscribe((value) => {
        //get all tags
        this.tags = JSON.parse(value);
      }, (error) => {
        console.log(error);
      });
    });
  }


  //     createEvent(event) {
  //   this.service.createEvent(event).subscribe(
  //      data => {
  //        // refresh the list
  //          //return to page evemts
  //        return true;
  //      },
  //      error => {
  //        console.error("Error saving event!");
  //        return Observable.throw(error);
  //      }
  //   );
  // }
}
