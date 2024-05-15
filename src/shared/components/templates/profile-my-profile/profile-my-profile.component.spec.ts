import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMyProfileComponent } from './profile-my-profile.component';

describe('ProfileMyProfileComponent', () => {
  let component: ProfileMyProfileComponent;
  let fixture: ComponentFixture<ProfileMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileMyProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
