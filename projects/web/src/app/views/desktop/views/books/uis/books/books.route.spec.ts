import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRoute } from './books.route';

describe('BooksRoute', () => {
  let component: BooksRoute;
  let fixture: ComponentFixture<BooksRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
