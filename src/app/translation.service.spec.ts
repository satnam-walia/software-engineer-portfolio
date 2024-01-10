import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TranslationService],
    });

    service = TestBed.inject(TranslationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load translations', () => {
    const lang = 'en'; // Replace with your desired language
    const mockTranslations = {
      // Mock translations data here
    };

    service.loadTranslations(lang).then((data) => {
      expect(data).toEqual(mockTranslations);
    });

    const req = httpMock.expectOne(`./assets/i18n/${lang}.json`);
    expect(req.request.method).toBe('GET');

    req.flush(mockTranslations);
  });

  it('should handle errors when loading translations', () => {
    const lang = 'en'; // Replace with your desired language

    service.loadTranslations(lang).catch((error) => {
      expect(error).toBeTruthy();
    });

    const req = httpMock.expectOne(`./assets/i18n/${lang}.json`);
    expect(req.request.method).toBe('GET');

    req.error(new ErrorEvent('Network error'), { status: 500 });
  });
});
