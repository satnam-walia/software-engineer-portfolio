import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../../contact/contact.component";

@Component({
    selector: 'app-project-template',
    standalone: true,
    templateUrl: './project-template.component.html',
    styleUrl: './project-template.component.css',
    imports: [CommonModule, ContactComponent]
})
export class ProjectTemplateComponent implements OnInit {
    
    ngOnInit() {
        this.scrollToTop();
      }
    scrollToTop() {
        window.scrollTo(0, 0);
      }
}
