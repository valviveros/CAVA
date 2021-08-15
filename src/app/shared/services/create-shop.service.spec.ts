import { TestBed } from '@angular/core/testing';

import { CreateShopService } from './create-shop.service';

describe('CreateShopService', () => {
  let service: CreateShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
