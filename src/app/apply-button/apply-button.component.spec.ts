import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyButtonComponent } from './apply-button.component';

describe('ApplyButtonComponent', () => {
  let component: ApplyButtonComponent;
  let fixture: ComponentFixture<ApplyButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyButtonComponent]
    });
    fixture = TestBed.createComponent(ApplyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
