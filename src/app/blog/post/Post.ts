/**
 * @overview Blog Post page.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  CommentsService,
  IPost,
  IComment,
  PostsService,
} from '<services>/api';
import template from './post.html';

@Component({
  selector: 'blog-post',
  template,
})
export class BlogPostComponent implements OnInit {
  public post: IPost;
  public comments: IComment[] = [];

  constructor (
    private _route: ActivatedRoute,
    private _router: Router,
    private _apiPosts: PostsService,
    private _apiComments: CommentsService
  ) {}

  ngOnInit () {
    this._route.params.subscribe((params: Params) => {
      const postId = params['id']
      this._apiPosts.getById(postId).subscribe((post) => {
        if (post) {
          this.post = post
          this._apiComments.getByPostId(post.id).subscribe((comments) => {
            this.comments = comments
          })
        } else {
          this._router.navigate(['/blog'])
        }
      });
    })
  }
}
