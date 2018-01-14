import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentsService {
  private apiURL: string = `http://localhost:9001/comments`;

  constructor(
    private _http: Http
  ) {}

  public getAll () {
    return this._http.get(this.apiURL)
      .map(this.buildResponse)
      .catch(this.handleError);
  }

  public getByPostId (postId: number) {
    return this._http.get(this.apiURL)
      .map((res)=> {
        return this
          .buildResponse(res)
          .filter((c: IComment) => c.id == postId)
          .shift()
      })
      .catch(this.handleError);
  }

  private buildResponse (res: Response) {
    return res.json();
  }

  private handleError (err: Response|any) {
    return Observable.throw(err.statusText)
  }
}

export interface IComment {
  id: number,
  postId: number,
  parent_id: number,
  user: string,
  date: string,
  content: string,
}
