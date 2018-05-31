import { TestBed, inject } from '@angular/core/testing';

import { FormProviderService } from './form-provider.service';

describe('FormProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormProviderService]
    });
  });

  it('should be created', inject([FormProviderService], (service: FormProviderService) => {
    expect(service).toBeTruthy();
  }));
});
