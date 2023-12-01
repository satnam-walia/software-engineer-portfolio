import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ContactComponent } from './contact/contact.component';
import {ExperienceComponent } from './experience/experience.component';
import {HeaderComponent } from './header/header.component';
import {NavigationComponent } from './navigation/navigation.component';
import {ProjectsGridComponent } from './projects-grid/projects-grid.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContactComponent, ExperienceComponent, 
    HeaderComponent, NavigationComponent, ProjectsGridComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'software-engineer-portfolio';
   ngOnInit() {
    
   }
}


