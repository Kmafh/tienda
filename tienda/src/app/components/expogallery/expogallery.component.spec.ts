import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpogalleryComponent } from './expogallery.component';

describe('ExpogalleryComponent', () => {
  let component: ExpogalleryComponent;
  let fixture: ComponentFixture<ExpogalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpogalleryComponent]
    });
    fixture = TestBed.createComponent(ExpogalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
