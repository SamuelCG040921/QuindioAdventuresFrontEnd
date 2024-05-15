import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletLoggedComponent } from './chalet-logged.component';

describe('ChaletLoggedComponent', () => {
  let component: ChaletLoggedComponent;
  let fixture: ComponentFixture<ChaletLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChaletLoggedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaletLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
