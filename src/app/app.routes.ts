import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsGridComponent } from './projects-grid/projects-grid.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsGridComponent},
    { path: 'experience', component:  ExperienceComponent},
    { path: 'contact', component:  ContactComponent},
];
