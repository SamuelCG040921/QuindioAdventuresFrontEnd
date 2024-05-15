import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetsPlanComponent } from './targets-plan.component';

describe('TargetsPlanComponent', () => {
  let component: TargetsPlanComponent;
  let fixture: ComponentFixture<TargetsPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TargetsPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetsPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
