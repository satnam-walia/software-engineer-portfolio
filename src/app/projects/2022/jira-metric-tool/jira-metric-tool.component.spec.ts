import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraMetricToolComponent } from './jira-metric-tool.component';

describe('JiraMetricToolComponent', () => {
  let component: JiraMetricToolComponent;
  let fixture: ComponentFixture<JiraMetricToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JiraMetricToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JiraMetricToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
