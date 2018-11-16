import { TestBed } from '@angular/core/testing';

import { AcceptanceTestService } from './acceptance-test.service';

describe('AcceptanceTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcceptanceTestService = TestBed.get(AcceptanceTestService);
    expect(service).toBeTruthy();
  });
});
