import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor() {}

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    section?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }
}
