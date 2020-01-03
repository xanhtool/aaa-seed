import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBooksListItemComponent } from './mobile-books-list-item.component';

describe('MobileBooksListItemComponent', () => {
  let component: MobileBooksListItemComponent;
  let fixture: ComponentFixture<MobileBooksListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBooksListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBooksListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
