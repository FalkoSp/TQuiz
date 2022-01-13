import { TestBed } from '@angular/core/testing';

import { FactorizerService } from './factorizer.service';

describe('FactorizerService', () => {
  let service: FactorizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactorizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
