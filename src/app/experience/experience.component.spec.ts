import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { TranslationService } from '../translation.service';

// Mock TranslationService
const mockTranslationService = {
  loadTranslations: jest.fn().mockResolvedValue(true),
  translate: jest.fn((key: string) => `translated-${key}`)
};

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceComponent],
      providers: [
        { provide: TranslationService, useValue: mockTranslationService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should translate experience details', async () => {
    // This assumes loadTranslations is called in ngOnInit or similar lifecycle hook
    await fixture.whenStable(); // Wait for async operations to complete

    // Check if the translate function of the mockTranslationService is called
    expect(mockTranslationService.translate).toHaveBeenCalled();

    // Example: Check if the first experience's role is translated
    expect(component.experiences[0]?.role).toBe('translated-experience.programmerAnalystIntern.role');

    // Add more assertions as needed for other properties
  });
});
