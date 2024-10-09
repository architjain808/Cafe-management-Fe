import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeRegisterComponent } from './cafe-register.component';

describe('CafeRegisterComponent', () => {
  let component: CafeRegisterComponent;
  let fixture: ComponentFixture<CafeRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CafeRegisterComponent]
    });
    fixture = TestBed.createComponent(CafeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
