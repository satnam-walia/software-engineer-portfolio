import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Programmer Analyst Intern',
      company: 'Shared Service Canada (SSC)',
      location: 'Remote',
      duration: 'Jan 2024 – Apr 2024',
      description: [
        'Collect requirements from end users and identify opportunities to create the automation strategies',
        'Develop solution for automated workflows data visualizations and reports',
        'Conceptualizing data that is crucial for automation',
        'Run performance tests'
      ],
      logo: './assets/images/icons/SSC_icon.png' // Replace with actual logo path
    },
    {
      role: 'Software Developer Intern',
      company: 'Royal Bank Of Canada (RBC)',
      location: 'Montreal, QC',
      duration: 'Jan 2022 – Dec 2022',
      description: [
        'Achieved a 25% increase in user engagement with enhanced experience and functionality of webpages',
        'Improved the analysis of user experience by 20% through the implementation of Google Analytics',
        'Reduced pipeline failure by 50% via peer review of new code before merging into production',
        'Ensured 100% in accessibility compliance by utilizing accessibility tools',
        'Implemented unit testing on new code which reduced bug count by 40%',
        'Reduced development time by 30% through the development',
        'Implemented reusable components'
      ],
      logo: './assets/images/icons/RBC_icon.png' // Replace with actual logo path
    }
    // ... Add more experiences as needed
  ];
}