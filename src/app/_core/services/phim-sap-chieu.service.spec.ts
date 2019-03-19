import { TestBed } from '@angular/core/testing';

import { PhimSapChieuService } from './phim-sap-chieu.service';

describe('PhimSapChieuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhimSapChieuService = TestBed.get(PhimSapChieuService);
    expect(service).toBeTruthy();
  });
});
