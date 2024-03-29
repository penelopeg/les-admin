import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class NewsService {
    constructor (
    private http: Http
  ) {}

   getNews() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/news')
    .map((res:Response) => res.json());
  }

}
