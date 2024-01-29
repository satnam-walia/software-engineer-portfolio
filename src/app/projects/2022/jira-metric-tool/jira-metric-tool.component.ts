import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../../../contact/contact.component";
import { ActivatedRoute } from '@angular/router';
import { NavigationComponent } from '../../../navigation/navigation.component';

@Component({
    selector: 'app-jira-metric-tool',
    standalone: true,
    templateUrl: './jira-metric-tool.component.html',
    styleUrl: './jira-metric-tool.component.css',
    imports: [CommonModule, ContactComponent,NavigationComponent]
})
export class JiraMetricToolComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
      this.route.fragment.subscribe((fragment: string | null) => {
        const element = document.querySelector("#" + fragment);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      });
    }

}
