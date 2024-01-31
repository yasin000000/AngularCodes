import { TestBed } from '@angular/core/testing';

import { UpdateapiserviceService } from './updateapiservice.service';

describe('UpdateapiserviceService', () => {
  let service: UpdateapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
