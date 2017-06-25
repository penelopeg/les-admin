import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EditeventService {
  constructor(
    private http: Http
  ) { }

  getEvents(id) {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/events/' + id)
      .map((res: Response) => res.json());
  }

  getAllTags() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/tags')
      .map((res: Response) => res.json());
  }


  updateEvent(event) {
    let body = JSON.stringify(event);
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/events/update/' + body, '').map((res: Response) => res.json());
  }

  deleteEvent(event_id) {
    console.log('http://ccva.jordao.xyz/MjY2ODU5NDky/events/delete/' + event_id);
    return this.http.delete('http://ccva.jordao.xyz/MjY2ODU5NDky/events/delete/' + event_id);
  }

}
