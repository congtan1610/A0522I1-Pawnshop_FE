import { TestBed } from '@angular/core/testing';

import { ContractTypeServiceService } from './contract-type-service.service';

describe('ContractTypeServiceService', () => {
  let service: ContractTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
