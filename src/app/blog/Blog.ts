/**
 * @overview Blog feature.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ROUTES, ROUTING_COMPONENTS } from './Blog.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    ROUTING_COMPONENTS,
  ],
  exports: [
    RouterModule
  ],    
})
export class BlogModule {}
