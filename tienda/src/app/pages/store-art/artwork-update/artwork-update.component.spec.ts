import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkUpdateComponent } from './artwork-update.component';

describe('ArtworkUpdateComponent', () => {
  let component: ArtworkUpdateComponent;
  let fixture: ComponentFixture<ArtworkUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtworkUpdateComponent]
    });
    fixture = TestBed.createComponent(ArtworkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
