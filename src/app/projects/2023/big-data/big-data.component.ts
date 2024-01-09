import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../../../contact/contact.component";
import { ImageSliderComponent, Slide } from "../../../imageslider/imageslider.component";



@Component({
    selector: 'app-big-data',
    standalone: true,
    templateUrl: './big-data.component.html',
    styleUrl: './big-data.component.css',
    imports: [CommonModule, ContactComponent, ImageSliderComponent]
})
export class BigDataComponent {

    slides: Slide[] = [
        { type: "image", url: '/assets/images/2023-big-data/pubsub.png'},
        // Add other slides here
    ];
}
