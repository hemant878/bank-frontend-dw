import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTransactionsComponent } from './show-transactions.component';

describe('ShowTransactionsComponent', () => {
  let component: ShowTransactionsComponent;
  let fixture: ComponentFixture<ShowTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTransactionsComponent]
    });
    fixture = TestBed.createComponent(ShowTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
