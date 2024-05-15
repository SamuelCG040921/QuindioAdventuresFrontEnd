import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalManageComponent } from './modal-manage.component';

describe('ModalManageComponent', () => {
  let component: ModalManageComponent;
  let fixture: ComponentFixture<ModalManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
