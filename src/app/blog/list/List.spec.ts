import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BlogListComponent } from './List';
import { PostsService } from '<services>/api';
import { Http } from '@angular/http';

xdescribe('Component: BlogListComponent', () => {
  let component: BlogListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogListComponent],
      providers: [PostsService, Http],
      schemas: [NO_ERRORS_SCHEMA]
    });

    const fixture = TestBed.createComponent(BlogListComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });
});
