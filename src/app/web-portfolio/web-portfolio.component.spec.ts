import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPortfolioComponent } from './web-portfolio.component';

describe('WebPortfolioComponent', () => {
  let component: WebPortfolioComponent;
  let fixture: ComponentFixture<WebPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
