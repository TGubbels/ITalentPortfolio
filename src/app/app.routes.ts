import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivitySelectionComponent } from './activity-selection/activity-selection.component';
import { IntrospectionComponent } from './introspection/introspection.component';

export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'activity-selection', component: ActivitySelectionComponent },
    { path: 'introspection', component: IntrospectionComponent },

    { path: 'about', component: AboutComponent }
];
