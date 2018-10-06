import { TestBed, inject } from '@angular/core/testing';

import { UserstoryService } from './userstory.service';

describe('UserstoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserstoryService]
    });
  });

  it('should be created', inject([UserstoryService], (service: UserstoryService) => {
    expect(service).toBeTruthy();
  }));
});
