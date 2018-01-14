import { Routes } from '@angular/router';

import { BlogListComponent } from './list/List';
import { BlogPostComponent } from './post/Post';

export const ROUTING_COMPONENTS = [
  BlogListComponent,
  BlogPostComponent
];

export const ROUTES: Routes = [
  {
    path: 'blog',
    component: BlogListComponent,
  },
  {
    path: 'blog/:id',
    component: BlogPostComponent,
  }
];
