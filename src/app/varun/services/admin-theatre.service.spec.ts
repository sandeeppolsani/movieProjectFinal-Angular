import { TestBed } from '@angular/core/testing';

import { AdminTheatreService } from './admin-theatre.service';

describe('AdminTheatreService', () => {
  let service: AdminTheatreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTheatreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
