import { Component, Input } from '@angular/core';
import { CommentsService } from '<services>/api';
import template from './add-comment.html';

@Component({
  selector: 'add-comment-form',
  template
})
export class AddCommentComponent {
  @Input() label: string = 'Add comment';
  @Input() postId: number;
  @Input() commentId: number;

  public comment: any = {
    user: '',
    content: ''
  }

  constructor (
    private _apiComments: CommentsService
  ) {}

  submit () {
    const { user, content } = this.comment;

    if (user && content) {
      const comment = {
        user,
        content,
        postId: this.postId,
        parent_id: this.commentId,
        date: new Date().toISOString().split('T')[0]
      }

      this._apiComments.saveComment(comment).subscribe((res) => {
        console.log(res)
      })
    }
  }
}
