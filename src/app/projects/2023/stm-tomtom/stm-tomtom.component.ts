import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../../../contact/contact.component";

@Component({
    selector: 'app-stm-tomtom',
    standalone: true,
    templateUrl: './stm-tomtom.component.html',
    styleUrl: './stm-tomtom.component.css',
    imports: [CommonModule, ContactComponent]
})
export class StmTomtomComponent {
    images = [
        { url: '/assets/2023-stm-tomtom/c2c-context.png', caption: 'Caption 1' },
        { url: '/assets/2023-stm-tomtom/c2c-primaire.png', caption: 'Caption 2' },
        { url: '/assets/2023-stm-tomtom/c2c-catalogue.png', caption: 'Caption 3' },
        // ... more images
        ];
        slideIndex = 1;

        @ViewChildren('slide') slides!: QueryList<ElementRef>; // Definite assignment assertion used here

        ngAfterViewInit() {
        this.showSlides(this.slideIndex);
        }

        plusSlides(n: number) {
        this.showSlides(this.slideIndex += n);
        }

        currentSlide(n: number) {
        this.showSlides(this.slideIndex = n);
        }

        private showSlides(n: number) {
        if (this.slides && this.slides.length > 0) {
            const slidesArray = this.slides.toArray();
            if (n > slidesArray.length) { this.slideIndex = 1; }
            if (n < 1) { this.slideIndex = slidesArray.length; }
            slidesArray.forEach((slide, index) => {
            slide.nativeElement.style.display = index === this.slideIndex - 1 ? 'block' : 'none';
            });
        }
    }
}
