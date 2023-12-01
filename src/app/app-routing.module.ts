import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsGridComponent } from './projects-grid/projects-grid.component';

const routes: Routes = [
  { path: 'about', component: HeaderComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'portfolio', component: ProjectsGridComponent },
  { path: 'connect', component: ContactComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
