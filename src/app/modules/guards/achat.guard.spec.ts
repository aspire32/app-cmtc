import { TestBed } from '@angular/core/testing';

import { AchatGuard } from './achat.guard';

describe('AchatGuard', () => {
  let guard: AchatGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AchatGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
