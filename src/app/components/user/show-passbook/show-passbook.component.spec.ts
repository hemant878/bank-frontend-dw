import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPassbookComponent } from './show-passbook.component';

describe('ShowPassbookComponent', () => {
  let component: ShowPassbookComponent;
  let fixture: ComponentFixture<ShowPassbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPassbookComponent]
    });
    fixture = TestBed.createComponent(ShowPassbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
