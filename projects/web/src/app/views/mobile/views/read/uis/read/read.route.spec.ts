import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRoute } from './read.route';

describe('ReadRoute', () => {
  let component: ReadRoute;
  let fixture: ComponentFixture<ReadRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
