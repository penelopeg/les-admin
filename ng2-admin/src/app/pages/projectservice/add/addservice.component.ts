import { Component } from '@angular/core';
import { AddserviceService } from './addservice.service';
import { ActivatedRoute, Router } from "@angular/router";
import 'style-loader!../projectservice.scss';

@Component({
  selector: 'addservice',
  templateUrl: './addservice.html',
})
export class AddserviceComponent {
  description = '';
  name = '';
  types = ['project', 'service'];
  type = '';

  constructor(protected service: AddserviceService, private _routeParams: ActivatedRoute, private _router: Router) {
  }
  model = { name: this.name, description: this.description, type: this.type };
  onSubmit() {
    this.service.createService(this.model).subscribe(
      data => {
        this._router.navigate(['pages/projectservice']);
      },
      error => {
        console.error("Error saving event!");
      }
    );
  }

}
