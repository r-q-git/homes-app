import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCardBoxComponent } from './property-card-box.component';

describe('PropertyCardBoxComponent', () => {
  let component: PropertyCardBoxComponent;
  let fixture: ComponentFixture<PropertyCardBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyCardBoxComponent]
    });
    fixture = TestBed.createComponent(PropertyCardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
