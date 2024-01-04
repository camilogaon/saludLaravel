import { TestBed } from '@angular/core/testing';

import { EspecializacionesService } from './especializaciones.service';

describe('EspecializacionesService', () => {
  let service: EspecializacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecializacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
