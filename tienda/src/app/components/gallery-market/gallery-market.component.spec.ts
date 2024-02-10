import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMarketComponent } from './gallery-market.component';

describe('GalleryMarketComponent', () => {
  let component: GalleryMarketComponent;
  let fixture: ComponentFixture<GalleryMarketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryMarketComponent]
    });
    fixture = TestBed.createComponent(GalleryMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
