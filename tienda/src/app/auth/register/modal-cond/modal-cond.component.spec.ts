import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCondComponent } from './modal-cond.component';

describe('ModalCondComponent', () => {
  let component: ModalCondComponent;
  let fixture: ComponentFixture<ModalCondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCondComponent]
    });
    fixture = TestBed.createComponent(ModalCondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
