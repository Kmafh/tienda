import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreArtComponent } from './store-art.component';

describe('StoreArtComponent', () => {
  let component: StoreArtComponent;
  let fixture: ComponentFixture<StoreArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreArtComponent]
    });
    fixture = TestBed.createComponent(StoreArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
