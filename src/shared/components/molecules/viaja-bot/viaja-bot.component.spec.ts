import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajaBotComponent } from './viaja-bot.component';

describe('ViajaBotComponent', () => {
  let component: ViajaBotComponent;
  let fixture: ComponentFixture<ViajaBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViajaBotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViajaBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
