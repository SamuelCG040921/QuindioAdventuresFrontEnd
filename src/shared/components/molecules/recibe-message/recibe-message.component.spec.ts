import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeMessageComponent } from './recibe-message.component';

describe('RecibeMessageComponent', () => {
  let component: RecibeMessageComponent;
  let fixture: ComponentFixture<RecibeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecibeMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecibeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
