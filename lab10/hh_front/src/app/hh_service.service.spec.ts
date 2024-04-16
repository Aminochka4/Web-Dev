import { TestBed } from '@angular/core/testing';

import { HhServiceService } from './hh_service.service';

describe('HhServiceService', () => {
  let service: HhServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HhServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
