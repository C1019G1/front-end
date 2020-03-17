import { TestBed } from '@angular/core/testing';

import { ReadMoneyService } from './read-money.service';

describe('ReadMoneyService', () => {
  let service: ReadMoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadMoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
