import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductentryComponent } from './productentry.component';

describe('ProductentryComponent', () => {
  let component: ProductentryComponent;
  let fixture: ComponentFixture<ProductentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
