import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanLoggedComponent } from './plan-logged.component';

describe('PlanLoggedComponent', () => {
  let component: PlanLoggedComponent;
  let fixture: ComponentFixture<PlanLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanLoggedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
