import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBooksListContainer } from './mobile-books-list.container';

describe('MobileBooksListContainer', () => {
  let component: MobileBooksListContainer;
  let fixture: ComponentFixture<MobileBooksListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBooksListContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBooksListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
