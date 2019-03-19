import { TestBed } from '@angular/core/testing';

import { TinTucService } from './tin-tuc.service';

describe('TinTucService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TinTucService = TestBed.get(TinTucService);
    expect(service).toBeTruthy();
  });
});
