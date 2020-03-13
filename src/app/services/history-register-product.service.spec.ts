import { TestBed } from '@angular/core/testing';

import { HistoryRegisterProductService } from './history-register-product.service';

describe('HistoryRegisterProductService', () => {
  let service: HistoryRegisterProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryRegisterProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
