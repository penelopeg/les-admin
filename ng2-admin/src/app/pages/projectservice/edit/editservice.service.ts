import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EditserviceService {
  constructor(
    private http: Http
  ) { }

  getServices(id) {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/services/' + id)
      .map((res: Response) => res.json());
  }

  updateService(event) {
    let body = encodeURIComponent(JSON.stringify(event));
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/services/update/' + body, '').map((res: Response) => res.json());
  }

  deleteService(event_id) {
    return this.http.delete('http://ccva.jordao.xyz/MjY2ODU5NDky/services/delete/' + event_id);
  }

}
