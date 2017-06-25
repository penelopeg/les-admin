import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AddnewService {
    constructor (
    private http: Http
  ) {}

   getNews(id) {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/news/' + id)
    .map((res:Response) => res.json());
  }

  getAllTags() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/tags')
    .map((res:Response) => res.json());
  }

   createNews(event) {
    let body = encodeURIComponent(JSON.stringify(event));
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/news/add/'+body, '').map((res: Response) => res.json());
  }

}
