import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IComment } from '<services>/api';

@Injectable()
export class PostsService {
  private apiURL: string = `http://localhost:9001/posts`;

  constructor(
    private _http: Http
  ) {}

  public getAll () {
    return this._http.get(`${this.apiURL}/?_sort=publish_date&_order=desc`)
      .map(this.buildResponse)
      .catch(this.handleError);
  }

  public getById (postId: number) {
    return this._http.get(`${this.apiURL}/${postId}`)
      .map(this.buildResponse)
      .catch(this.handleError);
  }

  public getCommentsByPostId (postId: number) {
    return this._http.get(`${this.apiURL}/${postId}/comments`)
      .map((res)=> {
        let comments = this
          .buildResponse(res)
          .filter((c: IComment) => c.postId == postId)

        return this.buildCommentsTree(comments)
      })
      .catch(this.handleError);
  }

  private buildCommentsTree (comments: IComment[], parent: number = null) {
    let out = []
    for(let c in comments) {
      if(comments[c].parent_id == parent) {
        let children = this.buildCommentsTree(comments, comments[c].id)

        if(children.length) {
          comments[c].children = children
        }
        out.push(comments[c])
      }
    }
    return out
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
