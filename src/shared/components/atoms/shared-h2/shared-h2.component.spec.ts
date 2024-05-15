import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedH2Component } from './shared-h2.component';

describe('SharedH2Component', () => {
  let component: SharedH2Component;
  let fixture: ComponentFixture<SharedH2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedH2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
