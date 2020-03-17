import { TestBed } from '@angular/core/testing';

import { HistoryAuctionProductService } from './history-auction-product.service';

describe('HistoryAuctionProductService', () => {
  let service: HistoryAuctionProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryAuctionProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
