import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ThemesService {
    constructor (
    private http: Http
  ) {}


  getThemes() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/themes')
    .map((res:Response) => res.json());
  }

  createTheme(event) {
    let body = encodeURIComponent(event);
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/themes/add/'+body, '').map((res: Response) => res.json());
  }

  updateTheme(event) {
    let body = encodeURIComponent(JSON.stringify(event));
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/themes/update/' + body, '').map((res: Response) => res.json());
  }

  deleteTheme(tag_id) {
    return this.http.delete('http://ccva.jordao.xyz/MjY2ODU5NDky/themes/delete/' + tag_id);
  }

}
