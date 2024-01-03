import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../../../contact/contact.component";

@Component({
    selector: 'app-squad-mood-metric',
    standalone: true,
    templateUrl: './squad-mood-metric.component.html',
    styleUrl: './squad-mood-metric.component.css',
    imports: [CommonModule, ContactComponent]
})
export class SquadMoodMetricComponent {

}
