import { TestBed } from '@angular/core/testing';

import { UcakService } from './ucak.service';

describe('UcakService', () => {
  let service: UcakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UcakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
