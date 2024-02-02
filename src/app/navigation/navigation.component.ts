import { Component, Input, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Event as RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

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
export class NavigationComponent implements OnInit {
  @Input() navItems: NavItem[] = [];
  isDropdownOpen: boolean = false;
  showResumeModal: boolean = false;
  pdfSrc = './assets/resume/SatnamWalia.pdf'; // Update with the path to your resume
  isHomeRoute: boolean = false;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Check the current route manually in addition to subscribing to future changes
    this.isHomeRoute = this.router.url === '/';
    
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isHomeRoute = event.urlAfterRedirects === '/';
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.showResumeModal) {
      this.closeResumeModal();
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  scrollToSection(event: Event, path: string): void {
    event.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      const headerOffset = 60; // Height of your fixed header, adjust accordingly
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
  }

  openResume(): void {
    this.showResumeModal = true;
    this.toggleBodyScroll(false);
    this.isDropdownOpen = false; // Close the dropdown menu
  }

  closeResumeModal(): void {
    this.showResumeModal = false;
    this.toggleBodyScroll(true);
  }

  private toggleBodyScroll(enable: boolean): void {
    document.body.style.overflow = enable ? 'auto' : 'hidden';
  }

  downloadPdf(): void {
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = 'Resume.pdf'; // Or use a dynamic filename
    link.click();
  }
}
