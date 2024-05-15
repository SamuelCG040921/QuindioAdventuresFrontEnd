import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendendMessageComponent } from './sendend-message.component';

describe('SendendMessageComponent', () => {
  let component: SendendMessageComponent;
  let fixture: ComponentFixture<SendendMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendendMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
