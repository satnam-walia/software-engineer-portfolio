import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import {ContactComponent } from './contact/contact.component';
import {ExperienceComponent } from './experience/experience.component';
import {HeaderComponent } from './header/header.component';
import {NavigationComponent } from './navigation/navigation.component';
import {ProjectsGridComponent } from './projects-grid/projects-grid.component';
import { Meta } from '@angular/platform-browser';



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
      RouterOutlet
  ]
})
export class AppComponent implements OnInit {
  constructor(private router: Router,private metaTagService: Meta) {}

  title = 'software-engineer-portfolio';
   ngOnInit() {
    this.router.navigate([''])
    this.metaTagService.updateTag(
      { name: 'description', content: 'Your description content here' }
    );
   }
}


