/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WpService } from './wp.service';

describe('Service: Wp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WpService]
    });
  });

  it('should ...', inject([WpService], (service: WpService) => {
    expect(service).toBeTruthy();
  }));
});
