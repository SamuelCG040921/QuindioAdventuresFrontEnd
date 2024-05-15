import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedH1Component } from './shared-h1.component';

describe('SharedH1Component', () => {
  let component: SharedH1Component;
  let fixture: ComponentFixture<SharedH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedH1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
