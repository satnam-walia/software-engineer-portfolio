import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home.component';
import { JiraMetricToolComponent } from './projects/2022/jira-metric-tool/jira-metric-tool.component';
import { SquadMoodMetricComponent } from './projects/2022/squad-mood-metric/squad-mood-metric.component';
import { BigDataComponent } from './projects/2023/big-data/big-data.component';
import { StmTomtomComponent } from './projects/2023/stm-tomtom/stm-tomtom.component';
import { WebPortfolioComponent } from './web-portfolio/web-portfolio.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'jira-metric-tool', component: JiraMetricToolComponent },
    { path: 'squad-mood-metric', component: SquadMoodMetricComponent },
    { path: 'stm-tomtom', component: StmTomtomComponent },
    { path: 'big-data', component: BigDataComponent },
    { path: 'web-portfolio', component:  WebPortfolioComponent },
   
];
