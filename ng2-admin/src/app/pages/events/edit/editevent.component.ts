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
        this.tags = JSON.parse(value);
      }, (error) => {
        console.log(error);
      });

      this.service.getEvents(params['id']).subscribe((value) => {
        var item = JSON.parse(value);
        this.desc = item[0].desc;
        this.name = item[0].name;
        this.e_time = item[0].e_time; 
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


 
//   updateEvent(event) {
//     //event_id
//     this.service.updateEvent(event).subscribe(
//        data => {
//          // refresh the list
//          //go to events page
//          return true;
//        },
//        error => {
//          console.error("Error saving event!");
//          return Observable.throw(error);
//        }
//     );
//   }
 
//   deleteEvent(event) {
//      //get event_id
//     if (confirm("Are you sure you want to delete " + event.name + "?")) {
//       this.service.deleteEvent(event_id).subscribe(
//          data => {
//            // refresh the list
//            // go to events page
//            return true;
//          },
//          error => {
//            console.error("Error deleting event!");
//            return Observable.throw(error);
//          }
//       );
//     }
//   }



}
