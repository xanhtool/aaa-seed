import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBooksRoute } from './mobile-books.route';

describe('MobileBooksRoute', () => {
  let component: MobileBooksRoute;
  let fixture: ComponentFixture<MobileBooksRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBooksRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBooksRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
