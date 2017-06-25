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

  getAllTags() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/tags')
    .map((res:Response) => res.json());
  }

  updateNews(event) {
    let body = encodeURIComponent(JSON.stringify(event));
    console.log(body);
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/news/update/' + body, '').map((res: Response) => res.json());
  }

  deleteNews(event_id) {
    return this.http.delete('http://ccva.jordao.xyz/MjY2ODU5NDky/events/news/' + event_id);
  }

}
