
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JiraMetricToolComponent } from './projects/2022/jira-metric-tool/jira-metric-tool.component';
import { SquadMoodMetricComponent } from './projects/2022/squad-mood-metric/squad-mood-metric.component';

export const routes: Routes = [
  { path: './jira-metric-tool', component: JiraMetricToolComponent },
  { path: './squad-mood-metric', component: SquadMoodMetricComponent },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
