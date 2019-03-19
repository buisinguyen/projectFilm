import { TestBed } from '@angular/core/testing';

import { HuyGheService } from './huy-ghe.service';

describe('HuyGheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HuyGheService = TestBed.get(HuyGheService);
    expect(service).toBeTruthy();
  });
});
