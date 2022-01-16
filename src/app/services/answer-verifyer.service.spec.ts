import { TestBed } from '@angular/core/testing';

import { AnswerVerifyerService } from './answer-verifyer.service';

describe('AnswerVerifyerService', () => {
  let service: AnswerVerifyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerVerifyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
