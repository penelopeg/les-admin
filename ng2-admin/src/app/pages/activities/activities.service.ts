import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ActivitiesService {
    constructor (
    private http: Http
  ) {}


  getAllTags() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/tags')
    .map((res:Response) => res.json());
  }

  createTag(event) {
    let body = encodeURIComponent(JSON.stringify(event));
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/tags/add/'+body, '').map((res: Response) => res.json());
  }

  updateTag(event) {
    let body = encodeURIComponent(JSON.stringify(event));
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/tags/update/' + body, '').map((res: Response) => res.json());
  }

  deleteTag(tag_id) {
    return this.http.delete('http://ccva.jordao.xyz/MjY2ODU5NDky/tags/delete/' + tag_id);
  }

}
