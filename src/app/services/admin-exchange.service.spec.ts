import { TestBed } from '@angular/core/testing';

import { AdminExchangeService } from './admin-exchange.service';

describe('AdminExchangeService', () => {
  let service: AdminExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
