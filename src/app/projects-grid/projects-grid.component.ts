import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.css'],
  animations: [
    trigger('dropdownAnimation', [
      state('closed', style({
        opacity: 0,
        maxHeight: '0px',
        overflow: 'hidden',
        visibility: 'hidden'
      })),
      state('open', style({
        opacity: 1,
        maxHeight: '500px', // should be large enough to contain the content
        visibility: 'visible'
      })),
      transition('closed <=> open', animate('500ms ease-in-out'))
    ])
  ]
})
export class ProjectsGridComponent {
  projectYears: number[] = [2024, 2023, 2022];
  activeDropdown: number | null = null;

  projects: { [year: number]: Array<{ title: string; category: string; imageUrl: string; link: string; }> } = {
    2024: [
      { title: 'Space Explorer VR', category: 'Squad Mood Metric', imageUrl: 'src/assets/big_data.png', link: 'https://example.com/projects/space-explorer-vr' }
    ],
    2023: [
      { title: 'Architecture tactics with bus routes', category: 'System Design', imageUrl: './assets/stm.png', link: 'https://example.com/projects/ocean-cleanup-bot' },
      { title: 'K-means with MapReduce and Publish/Subscribe', category: 'Big Data', imageUrl: './assets/big_data.png', link: 'https://example.com/projects/ocean-cleanup-bot' },
    ],
    2022: [
      { title: 'Jira Metric Tool', category: 'API Programming', imageUrl: './assets/jira_metric_tool.png', link: 'https://example.com/projects/smart-agriculture-ai' },
      { title: 'Squad Mood Metric',  category: 'Data Integration', imageUrl: './assets/squad_mood_metric.png', link: 'https://example.com/projects/smart-agriculture-ai' },
    ]
  };

  toggleDropdown(year: number): void {
    this.activeDropdown = this.activeDropdown === year ? null : year;
  }
}
