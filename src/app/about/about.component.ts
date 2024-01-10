
import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isMobile: boolean = false;
  activeSlide: number = 0;

  private touchStartX: number = 0;
  private touchEndX: number = 0;

  currentEndeavors: string[] = [
    'Daily Java problem-solving on LeetCode',
    'Engagement with the GDG Cloud community in Montreal, focusing on GenAI'
  ];

  dreams: string[] = ['Landing an internship in the United States'];
  personalInsights: string[] = ['Practicing Mixed Martial Arts (MMA) as a hobby'];
  valuesDrive: string[] = [
    'Upholding consistency in all endeavors',
    'Finding joy in every moment'
  ];
  uniqueStrengths: string[] = [
    'Constant drive to learn new technologies',
    'Ever-growing knowledge base in the tech field'
  ];
  futureVisions: string[] = [
    'Aiming to work with a big tech company on real-world problems',
    'Continuously improving skills to prepare for advanced opportunities'
  ];
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const threshold = 50; // Minimum distance for a swipe to be detected
    if (this.touchEndX + threshold < this.touchStartX) {
      this.moveSlide(1); // Swipe left - move to next slide
    } else if (this.touchEndX > this.touchStartX + threshold) {
      this.moveSlide(-1); // Swipe right - move to previous slide
    }
  }

  private moveSlide(direction: number) {
    const total = this.totalSlides();
    this.activeSlide = (this.activeSlide + direction + total) % total;
  }

  private totalSlides(): number {
    return this.currentEndeavors.length + this.dreams.length + this.personalInsights.length + this.valuesDrive.length + this.uniqueStrengths.length + this.futureVisions.length;
  }
}
