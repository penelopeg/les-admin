import { Component } from '@angular/core';
import { EditmodulesService } from './editmodules.service';
import { ActivatedRoute, Router } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import 'style-loader!../modules.scss';

@Component({
  selector: 'editmodules',
  templateUrl: './editmodules.html',

})
export class EditmodulesComponent {
  description = '';
  title = '';
  themes = [];
  theme_id = '';
  audio_path = '';
  id = '';
  model = { id: this.id, title: this.title, description: this.description, theme_id: this.theme_id, audio_path: this.audio_path };

  constructor(protected service: EditmodulesService, private _routeParams: ActivatedRoute, private _router: Router) {
    this._routeParams.params.subscribe(params => {
      this.service.getAllThemes().subscribe((value) => {
        //get all tags
        this.themes = JSON.parse(value);
      }, (error) => {
        console.log(error);
      });
      this.service.getModule(params['id']).subscribe((value) => {
        var item = JSON.parse(value);
        this.id = params['id'];
        this.description = item[0].description;
        this.title = item[0].title;
        this.theme_id = item[0].theme_id;
        this.model = { id: this.id, title: this.title, description: this.description, theme_id: this.theme_id, audio_path: this.audio_path };

      }, (error) => {
        console.log(error);
      });

    });

  }

  onSubmit() {
    this.service.updateModule(this.model).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['pages/modules']);
      },
      error => {
        console.error("Error saving module!");
      }
    );
  }

  delete() {
    if (confirm("Quer mesmo eliminar o módulo?")) {
      this.service.deleteModule(this.id).subscribe(
        data => {
          this._router.navigate(['pages/modules']);
        },
        error => {
          console.error("Error deleting module!");
        }
      );
    }
  }




}
