import { TestBed } from '@angular/core/testing';

import { SuccessStatusService } from './success-status.service';

describe('SuccessStatusService', () => {
  let service: SuccessStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuccessStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
