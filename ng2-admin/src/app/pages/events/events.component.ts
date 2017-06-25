import { Component } from '@angular/core';
import { EventsService } from './events.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./events.scss';

@Component({
  selector: 'events',
  templateUrl: 'events.html'
})
export class EventsComponent {
  query: string = '';


  source: LocalDataSource = new LocalDataSource();
  events = [];
  constructor(protected service: EventsService) {
    this.service.getEvents().subscribe((value) => {
      JSON.parse(value).map((item) => {
        var tag = JSON.parse(item.tags);
        var selectedtags = '';
        if (tag != null) {
          tag.forEach((val) => {
            selectedtags = selectedtags.concat(' ' + val.name);
          });
        }

        Object.assign(item, { selectedtags: selectedtags });
        this.events.push(item);
      });
    }, (error) => {
      console.log(error);
    });

  }

}