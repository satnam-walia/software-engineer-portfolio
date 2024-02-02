import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../../../contact/contact.component";
import { ImageSliderComponent, Slide } from '../../../imageslider/imageslider.component';
import { NavigationComponent } from '../../../navigation/navigation.component';

@Component({
    selector: 'app-stm-tomtom',
    standalone: true,
    templateUrl: './stm-tomtom.component.html',
    styleUrl: './stm-tomtom.component.css',
    imports: [CommonModule, ContactComponent,ImageSliderComponent,NavigationComponent]
})
export class StmTomtomComponent implements OnInit {

    ngOnInit() {
        this.scrollToTop();
      }

    slides: Slide[] = [
        { type: 'image', url: '/assets/images/2023-stm-tomtom/c2c-context.png' },
        { type: 'image', url: '/assets/images/2023-stm-tomtom/c2c-primaire.png'},
        { type: 'image', url: '/assets/images/2023-stm-tomtom/c2c-catalogue.png'},
        // { type: 'code', codeContent: javaCodeContent }, // Example code snippet
        // ... more images
        ];

        scrollToTop() {
            window.scrollTo(0, 0);
          }
}
