import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinigalleryComponent } from './minigallery.component';

describe('MinigalleryComponent', () => {
  let component: MinigalleryComponent;
  let fixture: ComponentFixture<MinigalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinigalleryComponent]
    });
    fixture = TestBed.createComponent(MinigalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
