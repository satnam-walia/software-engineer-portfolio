// experience.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule if using routing
import { TranslationService } from '../translation.service';
import { Experience } from './experience.interface'; // Adjust the path as necessary

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule], // Include CommonModule and RouterModule here
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.loadTranslations('en').then(() => {
      this.experiences = [
        {
          role: this.translationService.translate('experience.programmerAnalystIntern.role'),
          company: this.translationService.translate('experience.programmerAnalystIntern.company'),
          location: this.translationService.translate('experience.programmerAnalystIntern.location'),
          duration: this.translationService.translate('experience.programmerAnalystIntern.duration'),
          description: this.translationService.translate('experience.programmerAnalystIntern.description').split('|'), // Assuming descriptions are pipe-separated
          logo: './assets/images/icons/SSC_icon.png'
        },
        {
          role: this.translationService.translate('experience.softwareDeveloperIntern.role'),
          company: this.translationService.translate('experience.softwareDeveloperIntern.company'),
          location: this.translationService.translate('experience.softwareDeveloperIntern.location'),
          duration: this.translationService.translate('experience.softwareDeveloperIntern.duration'),
          description: this.translationService.translate('experience.softwareDeveloperIntern.description').split('|'),
          logo: './assets/images/icons/RBC_icon.png'
        }
        // ... other experiences
      ];
    });
  }
}
