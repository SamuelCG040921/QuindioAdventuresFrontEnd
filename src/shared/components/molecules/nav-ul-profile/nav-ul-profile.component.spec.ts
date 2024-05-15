import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUlProfileComponent } from './nav-ul-profile.component';

describe('NavUlProfileComponent', () => {
  let component: NavUlProfileComponent;
  let fixture: ComponentFixture<NavUlProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavUlProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavUlProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
