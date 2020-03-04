import { TestBed } from '@angular/core/testing';

import { ProductRegisterService } from './product-register.service';

describe('ProductRegisterService', () => {
  let service: ProductRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
