import { TestBed } from '@angular/core/testing';

import { Example4Service } from './example4.service';

describe('Example4Service', () => {
  let service: Example4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Example4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
