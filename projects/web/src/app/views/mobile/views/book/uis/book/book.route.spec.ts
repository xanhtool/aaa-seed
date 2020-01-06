import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoute } from './book.route';

describe('BookRoute', () => {
  let component: BookRoute;
  let fixture: ComponentFixture<BookRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
