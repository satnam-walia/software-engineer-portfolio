import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() navItems: NavItem[] = [];
  isDropdownOpen: boolean = false;

  constructor(private router: Router) {}

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  scrollToSection(event: Event, path: string): void {
    event.preventDefault();
    const section = document.querySelector(path);
    section?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }
}
