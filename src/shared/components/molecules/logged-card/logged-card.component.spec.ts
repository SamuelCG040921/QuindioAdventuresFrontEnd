import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedCardComponent } from './logged-card.component';

describe('LoggedCardComponent', () => {
  let component: LoggedCardComponent;
  let fixture: ComponentFixture<LoggedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoggedCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
