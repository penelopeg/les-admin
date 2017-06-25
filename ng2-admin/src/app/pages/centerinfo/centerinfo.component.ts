import { Component } from '@angular/core';
import { CenterinfoService } from './centerinfo.service';

@Component({
  selector: 'centerinfo',
  templateUrl: './centerinfo.html',
})
export class CenterinfoComponent {
  title = '';
  description = '';
  address = '';
  email = '';
  phone_nr = '';
  contact_id = '';
  info_id = '';
  info = { id: this.info_id, title: this.title, description: this.description };
  contact = { address: this.address, phone_nr: this.phone_nr, email: this.email };

  constructor(protected service: CenterinfoService) {
    //get info
    this.service.getInfo().subscribe((value) => {
      this.info_id = JSON.parse(value)[0].id;
      this.title = JSON.parse(value)[0].title;
      this.description = JSON.parse(value)[0].description;
      this.info = { id: this.info_id, title: this.title, description: this.description };
    }, (error) => {
      console.log(error);
    });

    //get contact information
    this.service.getContacts().subscribe((value) => {
      var item = JSON.parse(value);
      this.address = item[0].address;
      this.phone_nr = item[0].phone_nr;
      this.email = item[0].email;
      this.contact = { address: this.address, phone_nr: this.phone_nr, email: this.email };
    }, (error) => {
      console.log(error);
    });
  }

  onSubmit() {
    this.service.updateInfo(this.info).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error("Error saving info!");
      }
    );

    this.service.updateContacts(this.contact).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error("Error saving contacts!");
      }
    );
  }

}
