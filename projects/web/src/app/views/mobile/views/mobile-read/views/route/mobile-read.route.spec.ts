import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileReadRoute } from './mobile-read.route';

describe('MobileReadRoute', () => {
  let component: MobileReadRoute;
  let fixture: ComponentFixture<MobileReadRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileReadRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileReadRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
