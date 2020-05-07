import { TestBed } from '@angular/core/testing';

import { AdminShowService } from './admin-show.service';

describe('AdminShowService', () => {
  let service: AdminShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
