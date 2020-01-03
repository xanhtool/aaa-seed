import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebHomeRoute } from './web-home.route';

describe('WebHomeRoute', () => {
  let component: WebHomeRoute;
  let fixture: ComponentFixture<WebHomeRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebHomeRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebHomeRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
