import { Routes } from '@angular/router';
import { JiraMetricToolComponent } from './projects/2022/jira-metric-tool/jira-metric-tool.component';
import { SquadMoodMetricComponent } from './projects/2022/squad-mood-metric/squad-mood-metric.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'jira-metric-tool', component: JiraMetricToolComponent },
    { path: 'squad-mood-metric', component: SquadMoodMetricComponent },
];
