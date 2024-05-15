import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMischaletsComponent } from './profile-mischalets.component';

describe('ProfileMischaletsComponent', () => {
  let component: ProfileMischaletsComponent;
  let fixture: ComponentFixture<ProfileMischaletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileMischaletsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileMischaletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
