import { Component } from '@angular/core';
import { EditserviceService } from './editservice.service';
import { ActivatedRoute, Router } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import 'style-loader!../projectservice.scss';

@Component({
  selector: 'editservice',
  templateUrl: './editservice.html',

})
export class EditserviceComponent {
  name = '';
  description = '';
  type = '';
  types = ['project', 'service'];
  id = '';
  model = { id: this.id, name: this.name, description: this.description, type: this.type};

  constructor(protected service: EditserviceService, private _routeParams: ActivatedRoute, private _router: Router) {
    this._routeParams.params.subscribe(params => {
      this.service.getServices(params['id']).subscribe((value) => {
        var item = JSON.parse(value);
        this.id = params['id'];
        this.description = item[0].description;
        this.name = item[0].name;
        this.type = item[0].type;
        this.model = { id: this.id, name: this.name, description: this.description, type: this.type};
      }, (error) => {
        console.log(error);
      });

    });

  }

  onSubmit() {
    this.service.updateService(this.model).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['pages/projectservice']);
      },
      error => {
        console.error("Error saving event!");
      }
    );
  }

  delete() {
    if (confirm("Quer mesmo eliminar o serviço?")) {
      this.service.deleteService(this.id).subscribe(
        data => {
          this._router.navigate(['pages/projectservice']);
        },
        error => {
          console.error("Error deleting service!");
        }
      );
    }
  }




}
