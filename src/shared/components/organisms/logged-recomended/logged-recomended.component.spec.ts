import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedRecomendedComponent } from './logged-recomended.component';

describe('LoggedRecomendedComponent', () => {
  let component: LoggedRecomendedComponent;
  let fixture: ComponentFixture<LoggedRecomendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoggedRecomendedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggedRecomendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
