import { Component } from '@angular/core';
import { CenterinfoService } from './centerinfo.service';

@Component({
  selector: 'centerinfo',
  templateUrl: './centerinfo.html',
})
export class CenterinfoComponent {
  info = '';
  address = '';
  email = '';
  phone = '';

  constructor(protected service: CenterinfoService) {
    //get info
    this.service.getInfo().subscribe((value) => {
      this.info = JSON.parse(value)[0].description;
    }, (error) => {
      console.log(error);
    });

    //get contact information
    this.service.getContacts().subscribe((value) => {
      var item = JSON.parse(value);
      this.address = item[0].address;
      this.phone = item[0].phone_nr;
      this.email = item[0].email;
    }, (error) => {
      console.log(error);
    });
  }

}
