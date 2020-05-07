import { TestBed } from '@angular/core/testing';

import { AdminScreenService } from './admin-screen.service';

describe('AdminScreenService', () => {
  let service: AdminScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
