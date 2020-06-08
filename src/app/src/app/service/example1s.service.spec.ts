import { TestBed } from '@angular/core/testing';

import { Example1sService } from './example1s.service';

describe('Example1sService', () => {
  let service: Example1sService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Example1sService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
