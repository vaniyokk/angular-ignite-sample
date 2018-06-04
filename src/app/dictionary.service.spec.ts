import { TestBed, inject } from '@angular/core/testing';

import { DictionaryService } from './dictionary.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictionaryService]
    });
  });

  it('should be created', inject([DictionaryService], (service: DictionaryService) => {
    expect(service).toBeTruthy();
  }));
});
