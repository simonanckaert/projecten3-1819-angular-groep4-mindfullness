import { TestBed, inject } from '@angular/core/testing';

import { KlantDataService } from './klant-data.service';

describe('KlantDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KlantDataService]
    });
  });

  it('should be created', inject([KlantDataService], (service: KlantDataService) => {
    expect(service).toBeTruthy();
  }));
});
