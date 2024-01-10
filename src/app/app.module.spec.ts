import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import { TranslationService } from './translation.service';

describe('AppModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
  });

  it('should provide TranslationService', () => {
    // Get an instance of the TranslationService from the TestBed
    const translationService = TestBed.inject(TranslationService);

    // Assert that the TranslationService is not null (i.e., it's provided)
    expect(translationService).toBeTruthy();
  });
});
