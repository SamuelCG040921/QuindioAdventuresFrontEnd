import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicationPlanComponent } from './ubication-plan.component';

describe('UbicationPlanComponent', () => {
  let component: UbicationPlanComponent;
  let fixture: ComponentFixture<UbicationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UbicationPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UbicationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
