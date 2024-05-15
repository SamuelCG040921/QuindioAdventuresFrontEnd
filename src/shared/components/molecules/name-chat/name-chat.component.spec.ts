import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameChatComponent } from './name-chat.component';

describe('NameChatComponent', () => {
  let component: NameChatComponent;
  let fixture: ComponentFixture<NameChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
