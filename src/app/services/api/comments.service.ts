import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CommentsService {
  private apiURL: string = `http://localhost:9001/comments`;

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

    return this._http.post(this.apiURL, JSON.stringify(payload), { headers })
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
