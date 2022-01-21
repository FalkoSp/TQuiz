import { TestBed } from '@angular/core/testing';

import { HttpClient } from "@angular/common/http";

import { FactorizerService } from './factorizer.service';

// Provide a test-double instead
let httpClientStub = {

}

describe('FactorizerService', () => {
  let service: FactorizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: HttpClient, useValue: httpClientStub } ],
    });
    service = TestBed.inject(FactorizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
