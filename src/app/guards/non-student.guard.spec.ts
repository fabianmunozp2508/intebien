import { TestBed } from '@angular/core/testing';

import { NonStudentGuard } from './non-student.guard';

describe('NonStudentGuard', () => {
  let guard: NonStudentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NonStudentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
