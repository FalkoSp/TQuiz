import { TestBed } from '@angular/core/testing';

import { QuizProviderService } from './quiz-provider.service';

describe('QuizProviderService', () => {
  let service: QuizProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
