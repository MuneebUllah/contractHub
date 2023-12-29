import { TestBed } from '@angular/core/testing';

import { StepperViewService } from './stepper-view';

describe('StepperViewService', () => {
  let service: StepperViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepperViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
