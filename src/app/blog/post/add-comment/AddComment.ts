import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-comment-form',
  template: `
  <form class="blog--post--comment--new">
    <div class="form-group">
      <input type="text" placeholder="Your name">
    </div>
    <div class="form-group">
      <textarea placeholder="What you are thinking?"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">{{label}}</button>
  </form>
`
})
export class AddCommentComponent {
  @Input() label: string = 'Add comment';
  @Input() postId: number;
  @Input() commentId: number;

  // TODO Save to Comments
}
