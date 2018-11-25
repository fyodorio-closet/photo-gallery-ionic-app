import { TestBed } from '@angular/core/testing';

import { PhotoProviderService } from './photo-provider.service';

describe('PhotoProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoProviderService = TestBed.get(PhotoProviderService);
    expect(service).toBeTruthy();
  });
});
