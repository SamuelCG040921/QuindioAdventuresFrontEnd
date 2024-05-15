import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivInfoChaletComponent } from './div-info-chalet.component';

describe('DivInfoChaletComponent', () => {
  let component: DivInfoChaletComponent;
  let fixture: ComponentFixture<DivInfoChaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivInfoChaletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivInfoChaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
