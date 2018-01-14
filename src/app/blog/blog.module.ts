/**
 * @overview Blog feature.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ROUTES, ROUTING_COMPONENTS } from './blog.routes';
import { CommentsService, PostsService } from '<services>/api';
import { CommentComponent } from './post/comment/Comment';
import { AddCommentComponent } from './post/add-comment/AddComment';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    ROUTING_COMPONENTS,
    CommentComponent,
    AddCommentComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PostsService,
    CommentsService
  ]
})
export class BlogModule {}
