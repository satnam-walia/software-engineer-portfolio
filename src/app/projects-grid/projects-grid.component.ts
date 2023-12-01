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

  projects: { [year: number]: Array<{ title: string; imageUrl: string; link: string; }> } = {
    2024: [
      { title: 'Space Explorer VR', imageUrl: 'src/assets/big_data.png', link: 'https://example.com/projects/space-explorer-vr' }
    ],
    2023: [
      { title: 'Architecture tactics with bus routes', imageUrl: '/assets/images/ocean-cleanup-bot.jpg', link: 'https://example.com/projects/ocean-cleanup-bot' },
      { title: 'K-means with MapReduce and Publish/Subscribe', imageUrl: '/assets/images/ocean-cleanup-bot.jpg', link: 'https://example.com/projects/ocean-cleanup-bot' },
    ],
    2022: [
      { title: 'Jira Metric Tool', imageUrl: '/assets/images/smart-agriculture-ai.jpg', link: 'https://example.com/projects/smart-agriculture-ai' },
      { title: 'Squad Mood Metric', imageUrl: '/assets/images/smart-agriculture-ai.jpg', link: 'https://example.com/projects/smart-agriculture-ai' },
    ]
  };

  toggleDropdown(year: number): void {
    this.activeDropdown = this.activeDropdown === year ? null : year;
  }
}
