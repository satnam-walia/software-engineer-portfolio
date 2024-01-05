import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../../../contact/contact.component";

@Component({
    selector: 'app-big-data',
    standalone: true,
    templateUrl: './big-data.component.html',
    styleUrl: './big-data.component.css',
    imports: [CommonModule, ContactComponent]
})
export class BigDataComponent {

}
