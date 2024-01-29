import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../../../contact/contact.component";
import { ImageSliderComponent, Slide } from '../../../imageslider/imageslider.component';
import { javaCodeContent } from './code-content';
import { NavigationComponent } from '../../../navigation/navigation.component';

@Component({
    selector: 'app-stm-tomtom',
    standalone: true,
    templateUrl: './stm-tomtom.component.html',
    styleUrl: './stm-tomtom.component.css',
    imports: [CommonModule, ContactComponent,ImageSliderComponent,NavigationComponent]
})
export class StmTomtomComponent {
    javaCodeContent: string = javaCodeContent;

    slides: Slide[] = [
        { type: 'image', url: '/assets/images/2023-stm-tomtom/c2c-context.png' },
        { type: 'image', url: '/assets/images/2023-stm-tomtom/c2c-primaire.png'},
        { type: 'image', url: '/assets/images/2023-stm-tomtom/c2c-catalogue.png'},
        // { type: 'code', codeContent: javaCodeContent }, // Example code snippet
        // ... more images
        ];
}
