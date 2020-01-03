import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBookRoute } from './mobile-book.route';

describe('MobileBookRoute', () => {
  let component: MobileBookRoute;
  let fixture: ComponentFixture<MobileBookRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBookRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBookRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
