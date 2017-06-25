import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AddserviceService {
    constructor (
    private http: Http
  ) {}

   getEvents(id) {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/events/' + id)
    .map((res:Response) => res.json());
  }

  getAllTags() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/tags')
    .map((res:Response) => res.json());
  }

   createService(event) {
    let body = encodeURIComponent(JSON.stringify(event));
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/services/add/'+body, '').map((res: Response) => res.json());
  }
  

}
