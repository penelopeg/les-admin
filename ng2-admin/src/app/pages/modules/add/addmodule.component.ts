import { Component } from '@angular/core';
import { AddmoduleService } from './addmodule.service';
import { ActivatedRoute, Router } from "@angular/router";
import 'style-loader!../modules.scss';

@Component({
  selector: 'addmodule',
  templateUrl: './addmodule.html',
})
export class AddmoduleComponent {
  description = '';
  title = '';
  themes = [];
  theme_id = '';
  audio_path = '';

  constructor(protected service: AddmoduleService, private _routeParams: ActivatedRoute, private _router: Router) {
     this.service.getAllThemes().subscribe((value) => {
        //get all tags
        this.themes = JSON.parse(value);
      }, (error) => {
        console.log(error);
      });
  }
  model = { title: this.title, description: this.description, theme_id: this.theme_id, audio_path: this.audio_path};
  onSubmit() {
    this.service.createModule(this.model).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['pages/modules']);
      },
      error => {
        console.error("Error saving module!");
      }
    );
  }

}
