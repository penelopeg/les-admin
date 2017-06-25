import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SocialService {
  constructor(
    private http: Http
  ) { }

  getSocial() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/social')
      .map((res: Response) => res.json());
  }


  updateSocial(event) {
    let body = encodeURIComponent(JSON.stringify(event));
    // let body = JSON.stringify(event);
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/social/update/' + body, '').map((res: Response) => res.json());
  }
}
