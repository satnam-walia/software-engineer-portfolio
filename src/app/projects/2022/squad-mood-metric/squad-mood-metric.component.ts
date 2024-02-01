import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../../../contact/contact.component";
import { NavigationComponent } from '../../../navigation/navigation.component';

@Component({
    selector: 'app-squad-mood-metric',
    standalone: true,
    templateUrl: './squad-mood-metric.component.html',
    styleUrl: './squad-mood-metric.component.css',
    imports: [CommonModule, ContactComponent, NavigationComponent ]
})
export class SquadMoodMetricComponent implements OnInit  {
    
    ngOnInit() {
        this.scrollToTop();
      }
    
    scrollToTop() {
        window.scrollTo(0, 0);
      }
}
