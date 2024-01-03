import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsGridComponent } from "../projects-grid/projects-grid.component";
import { NavigationComponent } from "../navigation/navigation.component";
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, ProjectsGridComponent, NavigationComponent, HeaderComponent, AboutComponent, ExperienceComponent, ContactComponent]
})
export class HomeComponent {

}
