import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-activity-selection',
  imports: [CommonModule],
  templateUrl: './activity-selection.component.html',
  styleUrl: './activity-selection.component.scss'
})
export class ActivitySelectionComponent {
  
  
  activities: Activity[] = [
    {
      id: 1,
      title: 'Innovatieroute',

    },
    {
      id: 2,
      title: 'Hackaton',

    },
    {
      id: 3,
      title: 'Stage',

    },
  ];

  selectedActivity: Activity | null = null;

  // Method to handle activity selection
  selectActivity(activity: Activity) {
    this.selectedActivity = activity;
  }
}
interface Activity {
  id: number;

  title: string;
}