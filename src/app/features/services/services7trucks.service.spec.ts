import { TestBed } from '@angular/core/testing';

import { Services7trucksService } from './services7trucks.service';

describe('Services7trucksService', () => {
  let service: Services7trucksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Services7trucksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
