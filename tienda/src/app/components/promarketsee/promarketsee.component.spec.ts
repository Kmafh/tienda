import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromarketseeComponent } from './promarketsee.component';

describe('PromarketseeComponent', () => {
  let component: PromarketseeComponent;
  let fixture: ComponentFixture<PromarketseeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromarketseeComponent]
    });
    fixture = TestBed.createComponent(PromarketseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
