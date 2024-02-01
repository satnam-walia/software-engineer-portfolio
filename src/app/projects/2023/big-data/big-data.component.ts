import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../../../contact/contact.component";
import { ImageSliderComponent, Slide } from "../../../imageslider/imageslider.component";
import { NavigationComponent } from '../../../navigation/navigation.component';



@Component({
    selector: 'app-big-data',
    standalone: true,
    templateUrl: './big-data.component.html',
    styleUrl: './big-data.component.css',
    imports: [CommonModule, ContactComponent, ImageSliderComponent, NavigationComponent ]
})
export class BigDataComponent implements OnInit {
   
    ngOnInit() {
        this.scrollToTop();
      }

    slides: Slide[] = [
        { type: "image", url: '/assets/images/2023-big-data/pubsub.png'},
        // Add other slides here
    ];

    scrollToTop() {
        window.scrollTo(0, 0);
      }
}
