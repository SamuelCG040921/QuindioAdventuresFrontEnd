import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalicationCardComponent } from './calication-card.component';

describe('CalicationCardComponent', () => {
  let component: CalicationCardComponent;
  let fixture: ComponentFixture<CalicationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalicationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalicationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
