import { TestBed } from '@angular/core/testing';

import { CharacterSelectorService } from './character-selector.service';

describe('CharacterSelectorService', () => {
  let service: CharacterSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
