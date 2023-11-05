import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserCompleteComponent } from './update-user-complete.component';

describe('UpdateUserCompleteComponent', () => {
  let component: UpdateUserCompleteComponent;
  let fixture: ComponentFixture<UpdateUserCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserCompleteComponent]
    });
    fixture = TestBed.createComponent(UpdateUserCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
