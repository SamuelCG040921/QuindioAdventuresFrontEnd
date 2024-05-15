import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoChaletComponent } from './update-info-chalet.component';

describe('UpdateInfoChaletComponent', () => {
  let component: UpdateInfoChaletComponent;
  let fixture: ComponentFixture<UpdateInfoChaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateInfoChaletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateInfoChaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
