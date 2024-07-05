import { TestBed } from '@angular/core/testing';

import { ExchengeService } from './exchenge.service';

describe('ExchengeSeerviceService', () => {
  let service: ExchengeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchengeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
