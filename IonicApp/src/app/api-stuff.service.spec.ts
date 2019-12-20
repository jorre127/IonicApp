import { TestBed } from '@angular/core/testing';

import { ApiStuffService } from './api-stuff.service';

describe('ApiStuffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiStuffService = TestBed.get(ApiStuffService);
    expect(service).toBeTruthy();
  });
});
