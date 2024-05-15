import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedImg3Component } from './shared-img3.component';

describe('SharedImg3Component', () => {
  let component: SharedImg3Component;
  let fixture: ComponentFixture<SharedImg3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedImg3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedImg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
