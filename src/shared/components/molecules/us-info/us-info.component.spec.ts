import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsInfoComponent } from './us-info.component';

describe('UsInfoComponent', () => {
  let component: UsInfoComponent;
  let fixture: ComponentFixture<UsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
