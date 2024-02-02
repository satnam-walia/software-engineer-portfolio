import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.css'],
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [ // ':enter' is alias for 'void => *'
        style({ height: 0, opacity: 0, transform: 'scaleY(0.8)' }), // Start with no height, transparent, and slightly scaled down
        animate('300ms ease-out', style({ height: '*', opacity: 1, transform: 'scaleY(1)' })) // Animate to natural height, opaque, and scaled to normal
      ]),
      transition(':leave', [ // ':leave' is alias for '* => void'
        animate('300ms ease-in', style({ height: 0, opacity: 0, transform: 'scaleY(0.8)' })) // Animate to no height, transparent, and slightly scaled down
      ])
    ])
  ]
})
export class ProjectsGridComponent{
  projectYears: number[] = [2024, 2023, 2022];
  activeDropdown: number | null = null;

  projects: { [year: number]: Array<{ title: string; category: string; imageUrl: string; link: string; }> } = {
    2024: [
      { title: 'Web Portfolio', category: 'Frontend Developpment', imageUrl: 'assets/images/2024-portfolio/portfolio.png', link: './web-portfolio' }
    ],
    2023: [
      { title: 'Architecture tactics with bus routes', category: 'System Design', imageUrl: 'assets/images/2023-stm-tomtom/stm.png', link: './stm-tomtom' },
      { title: 'K-means with MapReduce and Publish/Subscribe', category: 'Big Data', imageUrl: 'assets/images/2023-big-data/big_data.png', link: './big-data' },
    ],
    2022: [
      { title: 'Jira Metric Tool', category: 'API Programming', imageUrl: 'assets/images/2022-jira-metric-tool/jira_metric_tool.png', link: './jira-metric-tool' },
      { title: 'Squad Mood Metric',  category: 'Data Integration', imageUrl: 'assets/images/2022-squad-mood-metric/squad_mood_metric.png', link: './squad-mood-metric' },
    ]
  };

  toggleDropdown(year: number): void {
    this.activeDropdown = this.activeDropdown === year ? null : year;
  }
}
