import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsService {
  private apiURL: string = `http://localhost:9001/posts`;

  constructor(
    private _http: Http
  ) {}

  public getAll () {
    return this._http.get(this.apiURL)
      .map(this.buildResponse)
      .catch(this.handleError);
  }

  public getById (postId: number) {
    return this._http.get(this.apiURL)
      .map((res)=> {
        return this
          .buildResponse(res)
          .filter((p: IPost) => p.id == postId)
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

export interface IPost {
  author: string,
  content: string,
  description: string,
  id: number,
  publish_date: string,
  slug: string,
  title: string
}
