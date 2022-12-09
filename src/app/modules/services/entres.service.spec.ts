import { TestBed } from '@angular/core/testing';

import { EntresService } from './entres.service';

describe('EntresService', () => {
  let service: EntresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
