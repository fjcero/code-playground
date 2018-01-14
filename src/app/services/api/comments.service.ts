import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentsService {
  private apiURL: string = `http://localhost:9001`;

  constructor(
    private _http: Http
  ) {}

  public saveComment (comment: IComment) {
    const payload = {
      postId: comment.postId,
      parent_id: comment.parent_id,
      user: comment.user,
      date: comment.date,
      content: comment.content
    }

    const headers = new Headers({ 'Content-Type': 'application/json' })

    return this._http.post(`${this.apiURL}/comments`, JSON.stringify(payload), { headers })
  }

  public getByPostId (postId: number) {
    return this._http.get(`${this.apiURL}/posts/${postId}/comments`)
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

export interface IComment {
  id?: number,
  postId: number,
  parent_id: number,
  user: string,
  date: string,
  content: string,
  children?: any[],
}
