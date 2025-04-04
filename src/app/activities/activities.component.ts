import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-activities',
  imports: [MatIconModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
  activities = [
    {
      title: 'Activity 1',
      date: '2025-04-01',
      description: 'This is the first activity in the timeline.'
    },
    {
      title: 'Activity 2',
      date: '2025-04-02',
      description: 'This is the second activity in the timeline.'
    },
    {
      title: 'Activity 3',
      date: '2025-04-03',
      description: 'This is the third activity in the timeline.'
    },
    {
      title: 'Activity 1',
      date: '2025-04-01',
      description: 'This is the first activity in the timeline.'
    },
    {
      title: 'Activity 2',
      date: '2025-04-02',
      description: 'This is the second activity in the timeline.'
    },
    {
      title: 'Activity 3',
      date: '2025-04-03',
      description: 'This is the third activity in the timeline.'
    },
    {
      title: 'Activity 1',
      date: '2025-04-01',
      description: 'This is the first activity in the timeline.'
    },
    {
      title: 'Activity 2',
      date: '2025-04-02',
      description: 'This is the second activity in the timeline.'
    },
    {
      title: 'Activity 3',
      date: '2025-04-03',
      description: 'This is the third activity in the timeline.'
    },
    // Add more activities as needed
  ];
}
