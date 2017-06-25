import { Component } from '@angular/core';
import { ProjectserviceService } from './projectservice.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./projectservice.scss';

@Component({
  selector: 'projectservice',
  templateUrl: 'projectservice.html'
})
export class ProjectserviceComponent {

  source: LocalDataSource = new LocalDataSource();
  services = [];
  constructor(protected service: ProjectserviceService) {
    this.service.getProjectservice().subscribe((value) => {
      JSON.parse(value).map((item) => {
        this.services.push(item);
      });
    }, (error) => {
      console.log(error);
    });

  }

}