import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EditmodulesService {
  constructor(
    private http: Http
  ) { }

  getModule(id) {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/modules/' + id)
      .map((res: Response) => res.json());
  }

    getAllThemes() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/themes')
    .map((res:Response) => res.json());
  }

  updateModule(event) {
    let body = encodeURIComponent(JSON.stringify(event));
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/modules/update/' + body, '').map((res: Response) => res.json());
  }

  deleteModule(event_id) {
    return this.http.delete('http://ccva.jordao.xyz/MjY2ODU5NDky/modules/delete/' + event_id);
  }

}
