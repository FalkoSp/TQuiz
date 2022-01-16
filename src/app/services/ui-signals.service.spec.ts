import { TestBed } from '@angular/core/testing';

import { UiSignalsService } from './ui-signals.service';

describe('UiSignalsService', () => {
  let service: UiSignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiSignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
