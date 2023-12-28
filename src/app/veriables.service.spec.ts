import { TestBed } from '@angular/core/testing';

import { VeriablesService } from './veriables.service';

describe('VeriablesService', () => {
  let service: VeriablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeriablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
