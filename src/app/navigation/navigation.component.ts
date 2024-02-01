import { ChangeDetectorRef, Component, Input } from '@angular/core';
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
  showResumeModal: boolean = false;
  pdfSrc = './assets/resume/SatnamWalia.pdf'; // Update with the path to your resume

  constructor(private router: Router,private cdr: ChangeDetectorRef) {}

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  scrollToSection(event: Event, path: string): void {
    event.preventDefault();
    const section = document.querySelector(path);
    section?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }

  openResume(): void {
    this.showResumeModal = true;
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  downloadPdf(): void {
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = 'Resume.pdf';  // Or use a dynamic filename
    link.click();
  }
}
