import { TestBed } from '@angular/core/testing';

import { AcceptanceCriteriaService } from './acceptance-criteria.service';

describe('AcceptanceCriteriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcceptanceCriteriaService = TestBed.get(AcceptanceCriteriaService);
    expect(service).toBeTruthy();
  });
});
