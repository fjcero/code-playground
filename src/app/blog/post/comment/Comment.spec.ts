/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentComponent } from './Comment';
import { AddCommentComponent } from '../add-comment/AddComment';
import { CommentsService, IComment } from '<services>/api';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Component: Comment', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  const commentMock = <IComment>{
    id: 1,
    postId: 1,
    parent_id: null,
    user: 'username',
    date: '2018-01-15',
    content: '<p>This is a content</p>',
  }

  const commentsServiceStub = {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCommentComponent, CommentComponent],
      providers: [ {provide: CommentsService, useValue: commentsServiceStub } ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
  }));

  it('should render 2 items in list', () => {
    component.comments = [ commentMock, commentMock];
    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement;
    expect(el.querySelectorAll('li').length).toBe(2);
  });
});
