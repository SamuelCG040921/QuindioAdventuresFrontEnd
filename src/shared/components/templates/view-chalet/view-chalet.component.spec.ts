import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChaletComponent } from './view-chalet.component';

describe('ViewChaletComponent', () => {
  let component: ViewChaletComponent;
  let fixture: ComponentFixture<ViewChaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewChaletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
