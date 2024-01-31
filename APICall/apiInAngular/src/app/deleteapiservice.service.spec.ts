import { TestBed } from '@angular/core/testing';

import { DeleteapiserviceService } from './deleteapiservice.service';

describe('DeleteapiserviceService', () => {
  let service: DeleteapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
