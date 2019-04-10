import { TestBed } from '@angular/core/testing';

import { AuthSeviceService } from './auth-sevice.service';

describe('AuthSeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthSeviceService = TestBed.get(AuthSeviceService);
    expect(service).toBeTruthy();
  });
});
