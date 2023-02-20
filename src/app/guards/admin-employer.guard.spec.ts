import { TestBed } from '@angular/core/testing';

import { AdminEmployerGuard } from './admin-employer.guard';

describe('AdminEmployerGuard', () => {
  let guard: AdminEmployerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminEmployerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
