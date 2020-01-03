import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeRoute } from './mobile-home.route';

describe('MobileHomeRoute', () => {
  let component: MobileHomeRoute;
  let fixture: ComponentFixture<MobileHomeRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileHomeRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHomeRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
