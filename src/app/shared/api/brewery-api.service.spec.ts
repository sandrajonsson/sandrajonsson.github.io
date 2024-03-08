import { TestBed } from '@angular/core/testing';

import { BreweryApiService } from './brewery-api.service';

describe('BreweryApiService', () => {
  let service: BreweryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreweryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
