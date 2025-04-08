import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-activities',
  imports: [MatIconModule, CommonModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
   
  groupedActivities: GroupedActivities = {};

  ngOnInit(): void {
    this.groupActivitiesByCategory();
  }

  groupActivitiesByCategory(): void {
    // Group activities by category
    this.groupedActivities = activities.reduce((group, activity) => {
      const { category } = activity;
      if (!group[category]) {
        group[category] = [];
      }
      group[category].push(activity);
      return group;
    }, {} as GroupedActivities); // Explicitly cast to GroupedActivities type
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  isLastItem(activities: Activity[], activity: Activity): boolean {
    return activities[activities.length - 1] === activity;
  }
  
}

interface Activity {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

// Define the grouped activities type
interface GroupedActivities {
  [category: string]: Activity[];
}

 const  activities = [
  {
    id: 1,
    category: 'Seminaries',
    title: 'Easi: The role of Power Apps, the low-code platform of Microsoft 365',
    description: `Gebruik van Power Apps uitleggen en ons een kleine app laten maken met Power Apps om de snelheid van simpele ontwikkeling te demonstreren.`,
    date: '12-03-2024, 3 uur',
    location: 'Easi, Hogeschool PXL',
  },
  {
    id: 2,
    category: 'Seminaries',
    title: 'Toreon: Ethical hacking',
    description: `In groepen van 4, challenges doen om zwakheden in code te vinden of om injectie te krijgen, leaderboard van welke groep de meeste challenges gedaan kreeg.`,
    date: '19-03-2024, 3 uur',
    location: 'Toreon, Hogeschool PXL',
  },
  {
    id: 3,
    category: 'Seminaries',
    title: 'Inetum-Realdolmen: Rapid app development',
    description: `Met Power Apps een candy-delivery app maken zonder zelf veel te coderen.`,
    date: '26-03-2024, 3 uur',
    location: 'Inetum, Hogeschool PXL',
  },
  {
    id: 4,
    category: 'Seminaries',
    title: 'Cegeka: The Challenge of Open Source',
    description: `Uitleg over tool die Cegeka ontwikkelt en gebruikt die alle Open Source die gebruikt wordt, bij doet houden. De moeilijkheden met werken met Open Source afhankelijkheden.`,
    date: '23-04-2024, 3 uur',
    location: 'Cegeka, Hogeschool PXL',
  },
  {
    id: 5,
    category: 'Seminaries',
    title: 'nocomputer: prompt engineering',
    description: `Uitleg over hoe AI eigenlijk werkt en de werking van LLM’s met tokens. Hoe je ervoor kan zorgen dat je een goed resultaat terug krijgt.`,
    date: '23-10-2024, 3 uur',
    location: 'nocomputer, Corda Campus',
  },
  {
    id: 6,
    category: 'Seminaries',
    title: 'ITLicious: Flutter',
    description: `Uitleg hoe het bedrijf flutte gebruikt en de voordelen van flutter. Ook hoe flutter in elkaar steekt met de engine en geschiedenis. Een demo om zelf een kleine app te maken, to-do app maken.`,
    date: '06-11-2024, 3 uur',
    location: 'ITLicious, Corda Campus',
  },
  {
    id: 7,
    category: 'Seminaries',
    title: 'Cegeka: Enterprise Architecture',
    description: `Uitleg hoe de architectuur van een bedrijf kan worden opgezet en hoe deze afhangt van de context en kan evalueren met de tijd en verschillende teams die eraan werken.`,
    date: '20-11-2024, 3 uur',
    location: 'Cegeka, Corda Campus',
  },
  {
    id: 8,
    category: 'Seminaries',
    title: 'AE: State management for Angular',
    description: `Uitleg over hoe Signals nu beter kunnen worden gebruikt binnen Angular voor state management. Demo’s om dit zelf uit te proberen.`,
    date: '11-12-2024',
    location: 'AE, Corda Campus',
  },
  {
    id: 9,
    category: 'Innovatie',
    title: 'Innovatieroute: Cloud & Security',
    description: `3 verschillende seminaries/workshops omtrent Cloud en Security.`,
    date: '24-09-2024 - 15-10-2024, 3 dagen, 1 dag per week.',
    location: 'Corda campus',
  },
  {
    id: 10,
    category: 'Innovatie',
    title: 'Hackaton: Hackaton PXL',
    description: `Twee verschillende opdrachten, een app voor tablet met spellen voor mensen met mentale beperking, of een website om communicatie tussen patienten, en verschillende doktoren te verbeteren.`,
    date: '10-11-2025, 16 uur.',
    location: 'PXL HealthCare, Corda Campus',
  },
  {
    id: 11,
    category: 'Persoonlijke Ontwikkeling',
    title: 'Projectweek 2TIN',
    description: `Uitleg over het project onderwerp: app om bevallingen van een paardenfokkerij bij te houden. Ontmoeting van de teams en verschillende sessies om bijvoorbeeld het team te leren kennen met wat ijsbrekers of om je LinkedInaccount op te zetten.`,
    date: '12-02-2024 – 16-02-2024',
    location: 'Hogeschool PXL, Hogeschool PXL Elfde Linie',
  },
  {
    id: 12,
    category: 'Persoonlijke Ontwikkeling',
    title: 'POP-sessie 2TIN: Brein aan het werk! Niet storen!',
    description: `Discussie over de invloed van smartphones op je studie en hoe snel deze door afleiding kan zorgen.`,
    date: '5/03/2024, 10:30-12:30',
    location: 'Hogeschool PXL',
  },
  {
    id: 13,
    category: 'Persoonlijke Ontwikkeling',
    title: 'POP-sessie 2TIN: POPping',
    description: `In je projectgroep bespreken waar iedereen denkt goed in te zijn en elkaar feedback geven, ook bespreken hoe je in een groep precies feedback aan elkaar kan geven.`,
    date: '5/03/2024, 8:30-10:30',
    location: 'Learning Path, Hogeschool PXL',
  },
  {
    id: 14,
    category: 'Persoonlijke Ontwikkeling',
    title: 'POP-sessie 3TIN: My Team and I',
    description: `Meerdere teambuilding activiteiten uitvoeren zoals het stapelen van blokken samen met elkaar. Hierna uitleg over theorie omtrent groepsdynamica en de piramide van LEONCIONI.`,
    date: '9/10/2024, 15:30 – 17:30',
    location: 'ISpace Corda Campus, Learning Path',
  },
  {
    id: 15,
    category: 'Internationalisering',
    title: 'Stage Netpresenter',
    description: `Stage in Nederland bij Netpresenter in Beek. Een notificationcentrum bouwen voor hun medewerkersapplicatie.`,
    date: '24-02-2025 – 30-05-2025',
    location: 'Netpresenter, Beek',
  },
];