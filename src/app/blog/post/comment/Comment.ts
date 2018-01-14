import { Component, Input } from '@angular/core';
import { IComment } from '<services>/api';
import template from './comment.html';

@Component({
  selector: 'comment-tree',
  template
})
export class CommentComponent {
  @Input() comments: IComment[] = [];
}
