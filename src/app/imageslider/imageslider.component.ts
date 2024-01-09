import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Slide {
  type: 'image' | 'code';
  url?: string;
  codeContent?: string;
}

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imageslider.component.html',
  styleUrl: './imageslider.component.css'
})

export class ImageSliderComponent {
  @Input() slides: Slide[] = []; // Array of image objects
  currentIndex = 0;
  isImagePopOut = false; // New property to control pop-out view

  showNext() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
  }

  showPrev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  toggleImagePopOut() {
    this.isImagePopOut = !this.isImagePopOut;
  }
}