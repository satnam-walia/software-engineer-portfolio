import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { TranslationService } from '../translation.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  let translationService: TranslationService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    TestBed.overrideComponent(ExperienceComponent, {
      set: {
        providers: [TranslationService],
      },
    });

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    translationService = TestBed.inject(TranslationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load and display translations', fakeAsync(() => {
    const dummyTranslations = {
      greeting: 'Hello, world!',
      welcome: 'Welcome to my app.',
    };

    spyOn(translationService, 'loadTranslations').and.returnValue(Promise.resolve(dummyTranslations));

    component.ngOnInit();

    tick(); // Simulate the passage of time

    expect(component.greetingTranslation).toEqual(dummyTranslations.greeting);
    expect(component.welcomeTranslation).toEqual(dummyTranslations.welcome);

    const req = httpTestingController.expectOne('./assets/i18n/en.json');
    expect(req.request.method).toBe('GET');
    req.flush(dummyTranslations);

    httpTestingController.verify();
  }));

  // it('should handle translation loading error', fakeAsync(() => {
  //   spyOn(translationService, 'loadTranslations').and.returnValue(Promise.reject('Test error'));
  //   spyOn(console, 'error');

  //   component.ngOnInit();

  //   tick();

  //   expect(console.error).toHaveBeenCalledWith('Error loading translations:', 'Test error');

  //   httpTestingController.verify();
  // }));
});
