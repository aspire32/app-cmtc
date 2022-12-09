import { TestBed } from '@angular/core/testing';

import { CategriesService } from './categries.service';

describe('CategriesService', () => {
  let service: CategriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
