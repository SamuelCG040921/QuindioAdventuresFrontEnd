import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageChaletComponent } from './image-chalet.component';

describe('ImageChaletComponent', () => {
  let component: ImageChaletComponent;
  let fixture: ComponentFixture<ImageChaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageChaletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageChaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
