import { Component } from '@angular/core';
import { AddnewService } from './addnew.service';
import { ActivatedRoute, Router } from "@angular/router";
import 'style-loader!../news.scss';

@Component({
  selector: 'addnew',
  templateUrl: './addnew.html',
})
export class AddnewComponent {
  content = '';
  title = '';
  tags = [];
  selecttags = [];
  publish_time = new Date();

  // public defaultPicture = 'assets/img/theme/no-photo.png';
  // public profile:any = {
  //   picture: 'assets/img/app/profile/Nasta.png'
  // };
  // public uploaderOptions:NgUploaderOptions = {
  //   // url: 'http://website.com/upload'
  //   url: '',
  // };
///ng2-admin/src/app/theme/components/baPictureUploader/baPictureUploader.component.ts

  constructor(protected service: AddnewService, private _routeParams: ActivatedRoute, private _router: Router) {
    this._routeParams.params.subscribe(params => {
      this.service.getAllTags().subscribe((value) => {
        //get all tags
        this.tags = JSON.parse(value);
      }, (error) => {
        console.log(error);
      });
    });
  }
  model = { title: this.title, content: this.content, publish_time: this.publish_time, selecttags: this.selecttags };
  onSubmit() {
    this.service.createNews(this.model).subscribe(
      data => {
        this._router.navigate(['pages/news']);
      },
      error => {
        console.error("Error saving event!");
      }
    );
  }


}
