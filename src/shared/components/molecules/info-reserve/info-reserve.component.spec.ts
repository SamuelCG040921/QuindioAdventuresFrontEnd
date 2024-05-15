import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReserveComponent } from './info-reserve.component';

describe('InfoReserveComponent', () => {
  let component: InfoReserveComponent;
  let fixture: ComponentFixture<InfoReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoReserveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
