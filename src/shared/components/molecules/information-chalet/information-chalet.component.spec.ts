import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationChaletComponent } from './information-chalet.component';

describe('InformationChaletComponent', () => {
  let component: InformationChaletComponent;
  let fixture: ComponentFixture<InformationChaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationChaletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationChaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
