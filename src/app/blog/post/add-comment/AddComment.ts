import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-comment-form',
  template: `
  <div class="blog--post--comment--new">
    <textarea></textarea>
    <input type="text" placeholder="Your name">
    // post_id
    // parent_comment_id
    <button type="submit" class="btn btn-primary">{{label}}</button>
  </div>
`
})
export class AddCommentComponent {
  @Input() label: string = 'Add comment';

  // TODO Save to Comments
}
