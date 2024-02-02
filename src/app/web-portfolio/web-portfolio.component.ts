import { Component, OnInit } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { ImageSliderComponent, Slide } from '../imageslider/imageslider.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-portfolio',
  standalone: true,
  imports: [CommonModule, ContactComponent,ImageSliderComponent,NavigationComponent],
  templateUrl: './web-portfolio.component.html',
  styleUrl: './web-portfolio.component.css'
})
export class WebPortfolioComponent implements OnInit{

  ngOnInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  slides: Slide[] = [
    { type: 'image', url: '/assets/images/2023-stm-tomtom/c2c-context.png' },
    { type: 'image', url: '/assets/images/2023-stm-tomtom/c2c-primaire.png'},
    { type: 'image', url: '/assets/images/2023-stm-tomtom/c2c-catalogue.png'},
    // { type: 'code', codeContent: javaCodeContent }, // Example code snippet
    // ... more images
    ];
}
