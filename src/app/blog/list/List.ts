/**
 * @overview Blog List page.
 */
import { Component, OnInit } from '@angular/core';

import template from './list.html';
import { PostsService } from '<services>/api';

@Component({
  selector: 'blog-list',
  template,
})
export class BlogListComponent implements OnInit {
  public posts: any[] = []

  constructor (
    private _apiPosts: PostsService
  ) {}

  ngOnInit () {
    this._apiPosts
      .getAll()
      .subscribe((posts) => {
        this.posts = posts.sort((a: any, b: any) => {
          let aDate = new Date(a.publish_date);
          let bDate = new Date(b.publish_date);
          return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
        })
      })
  }
}
