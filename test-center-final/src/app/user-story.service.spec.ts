import { TestBed } from '@angular/core/testing';

import { UserStoryService } from './user-story.service';

describe('UserStoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserStoryService = TestBed.get(UserStoryService);
    expect(service).toBeTruthy();
  });
});
