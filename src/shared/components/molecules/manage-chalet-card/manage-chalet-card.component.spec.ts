import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChaletCardComponent } from './manage-chalet-card.component';

describe('ManageChaletCardComponent', () => {
  let component: ManageChaletCardComponent;
  let fixture: ComponentFixture<ManageChaletCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageChaletCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageChaletCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
