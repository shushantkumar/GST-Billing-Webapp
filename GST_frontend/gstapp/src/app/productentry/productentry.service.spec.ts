import { TestBed, inject } from '@angular/core/testing';

import { ProductentryService } from './productentry.service';

describe('ProductentryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductentryService]
    });
  });

  it('should be created', inject([ProductentryService], (service: ProductentryService) => {
    expect(service).toBeTruthy();
  }));
});
