import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';

export const routes: Routes = [
    { path: '', component: AboutComponent }, 
    { path: 'activities', component: ActivitiesComponent }, 

    { path: 'about', component: AboutComponent } 
];
