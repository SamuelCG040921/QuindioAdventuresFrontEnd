import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsTittleComponent } from './comments-tittle.component';

describe('CommentsTittleComponent', () => {
  let component: CommentsTittleComponent;
  let fixture: ComponentFixture<CommentsTittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsTittleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentsTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
