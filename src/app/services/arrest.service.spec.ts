import { TestBed } from '@angular/core/testing';

import { ArrestService } from './arrest.service';

describe('ArrestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrestService = TestBed.get(ArrestService);
    expect(service).toBeTruthy();
  });
});
