/**
 * @overview Blog feature.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ROUTES, ROUTING_COMPONENTS } from './Blog.routes';
import { PostsService } from './posts.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    ROUTING_COMPONENTS,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PostsService
  ]
})
export class BlogModule {}
