import { Component, Input } from '@angular/core';
import { IComment } from '<services>/api';

@Component({
  selector: 'comment-tree',
  template: `
  <ul class="blog--post--comments" *ngIf="comments">
    <li *ngFor="let comment of comments">
      <div class="blog--post--comment">
        <div class="blog--post--comment--content" [innerHtml]="comment.content"></div>
        <div class="blog--post--comment--author">{{comment.user}}</div>
        <div class="blog--post--comment--date">{{comment.date}}</div>
      </div>

      <button class="btn btn-primary">Reply</button>

      <comment-tree [comments]="comment.children"></comment-tree>
    </li>
  </ul>
`
})
export class CommentComponent {
  @Input() comments: IComment[] = [];
}
