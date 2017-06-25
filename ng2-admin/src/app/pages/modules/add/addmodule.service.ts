import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AddmoduleService {
    constructor (
    private http: Http
  ) {}

   getModule(id) {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/modules/' + id)
    .map((res:Response) => res.json());
  }

  getAllThemes() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/themes')
    .map((res:Response) => res.json());
  }

   createModule(event) {
    let body = encodeURIComponent(JSON.stringify(event));
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/modules/add/'+body, '').map((res: Response) => res.json());
  }
  

}
