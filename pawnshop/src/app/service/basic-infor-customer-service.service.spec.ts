import { TestBed } from '@angular/core/testing';

import { BasicInforCustomerServiceService } from './basic-infor-customer-service.service';

describe('BasicInforCustomerServiceService', () => {
  let service: BasicInforCustomerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicInforCustomerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
