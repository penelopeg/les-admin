import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EditnewsService {
    constructor (
    private http: Http
  ) {}

   getNews(id) {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/news/' + id)
    .map((res:Response) => res.json());
  }

}
