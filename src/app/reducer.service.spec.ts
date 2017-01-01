/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReducerService } from './reducer.service';

describe('ReducerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReducerService]
    });
  });

  it('should ...', inject([ReducerService], (service: ReducerService) => {
    expect(service).toBeTruthy();
  }));
});
