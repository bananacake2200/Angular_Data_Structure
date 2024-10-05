import { Component } from '@angular/core';
import { Destination } from './Destionation';

@Component({
  selector: 'app-destinationlist',
  templateUrl: './destinationlist.component.html',
  styleUrl: './destinationlist.component.css'
})
export class DestinationlistComponent {
  destinations: Destination[] = [];

  addDestination(name: string, country: string) {
    if (name && country) {
      const newDestination: Destination = {
        id: this.destinations.length + 1,
        name,
        country
      };
      this.destinations.push(newDestination);
    }
  }

  removeDestination(index: number) {
    this.destinations.splice(index, 1);
  }
}
