import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClientDetailsComponent } from './modal-client-details.component';

describe('ModalClientDetailsComponent', () => {
  let component: ModalClientDetailsComponent;
  let fixture: ComponentFixture<ModalClientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalClientDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
