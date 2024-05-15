import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMisplanesComponent } from './profile-misplanes.component';

describe('ProfileMisplanesComponent', () => {
  let component: ProfileMisplanesComponent;
  let fixture: ComponentFixture<ProfileMisplanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileMisplanesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileMisplanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
