import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedImg2Component } from './shared-img2.component';

describe('SharedImg2Component', () => {
  let component: SharedImg2Component;
  let fixture: ComponentFixture<SharedImg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedImg2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedImg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
