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

  createTag(tag) {
    let body = JSON.stringify(tag);
    console.log('http://ccva.jordao.xyz/MjY2ODU5NDky/tags/add/'+body);
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/tags/add/'+body, '').map((res: Response) => res.json());
  }

  updateTag(tag) {
    let body = JSON.stringify(tag);
    console.log('http://ccva.jordao.xyz/MjY2ODU5NDky/tags/update/' + body);
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/tags/update/' + body, '').map((res: Response) => res.json());
  }

  deleteTag(tag_id) {
    console.log('http://ccva.jordao.xyz/MjY2ODU5NDky/tags/delete/' + tag_id);
    return this.http.delete('http://ccva.jordao.xyz/MjY2ODU5NDky/tags/delete/' + tag_id);
  }

}
