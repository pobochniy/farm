import { TestBed } from '@angular/core/testing';

import { LibFarmService } from './lib-farm.service';

describe('LibFarmService', () => {
  let service: LibFarmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibFarmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
