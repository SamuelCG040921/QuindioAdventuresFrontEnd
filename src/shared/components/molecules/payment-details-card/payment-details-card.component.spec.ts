import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailsCardComponent } from './payment-details-card.component';

describe('PaymentDetailsCardComponent', () => {
  let component: PaymentDetailsCardComponent;
  let fixture: ComponentFixture<PaymentDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentDetailsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
