import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerDetailComponent } from './update-customer-detail.component';

describe('UpdateCustomerDetailComponent', () => {
  let component: UpdateCustomerDetailComponent;
  let fixture: ComponentFixture<UpdateCustomerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCustomerDetailComponent]
    });
    fixture = TestBed.createComponent(UpdateCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
