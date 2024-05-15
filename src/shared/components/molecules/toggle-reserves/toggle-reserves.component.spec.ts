import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleReservesComponent } from './toggle-reserves.component';

describe('ToggleReservesComponent', () => {
  let component: ToggleReservesComponent;
  let fixture: ComponentFixture<ToggleReservesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleReservesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
