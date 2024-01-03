import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadMoodMetricComponent } from './squad-mood-metric.component';

describe('SquadMoodMetricComponent', () => {
  let component: SquadMoodMetricComponent;
  let fixture: ComponentFixture<SquadMoodMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquadMoodMetricComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquadMoodMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
