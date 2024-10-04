import { Component } from '@angular/core';
import { Sport } from './Sport';

@Component({
  selector: 'app-sportlist',
  templateUrl: './sportlist.component.html',
  styleUrl: './sportlist.component.css'
})
export class SportlistComponent {
  sports: Sport[] = [
    { id: 1, name: 'Football', category: 'Team Sport' },
    { id: 2, name: 'Basketball', category: 'Team Sport' },
    { id: 3, name: 'Tennis', category: 'Racquet Sport' },
    { id: 4, name: 'Swimming', category: 'Water Sport' },
    { id: 5, name: 'Boxing', category: 'Combat Sport' }
  ];

  addSport(name: string, category: string) {
    if (name && category) {
      const newSport: Sport = {
        id: this.sports.length + 1,
        name,
        category
      };
      this.sports.push(newSport);
    }
  }

  removeSport(index: number) {
    this.sports.splice(index, 1);
  }
}
