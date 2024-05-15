import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuouteComponent } from './quoute.component';

describe('QuouteComponent', () => {
  let component: QuouteComponent;
  let fixture: ComponentFixture<QuouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
