import { TestBed } from '@angular/core/testing';

import { HardcodeauthenticationService } from './hardcodeauthentication.service';

describe('HardcodeauthenticationService', () => {
  let service: HardcodeauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodeauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
