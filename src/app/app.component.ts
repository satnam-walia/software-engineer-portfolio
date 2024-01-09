import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import {ContactComponent } from './contact/contact.component';
import {ExperienceComponent } from './experience/experience.component';
import {HeaderComponent } from './header/header.component';
import {NavigationComponent } from './navigation/navigation.component';
import {ProjectsGridComponent } from './projects-grid/projects-grid.component';
import { AboutComponent } from "./about/about.component";
import { routes } from './app.routes';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
      CommonModule, 
      ContactComponent, 
      ExperienceComponent,
      HeaderComponent, 
      NavigationComponent, 
      ProjectsGridComponent, 
      AboutComponent,
      RouterOutlet
  ]
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  title = 'software-engineer-portfolio';
   ngOnInit() {
    this.router.navigate([''])
   }
}


