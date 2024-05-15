import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedImg1Component } from './shared-img1.component';

describe('SharedImg1Component', () => {
  let component: SharedImg1Component;
  let fixture: ComponentFixture<SharedImg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedImg1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedImg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
