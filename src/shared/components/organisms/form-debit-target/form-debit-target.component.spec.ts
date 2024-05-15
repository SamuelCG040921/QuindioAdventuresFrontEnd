import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDebitTargetComponent } from './form-debit-target.component';

describe('FormDebitTargetComponent', () => {
  let component: FormDebitTargetComponent;
  let fixture: ComponentFixture<FormDebitTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDebitTargetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDebitTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
