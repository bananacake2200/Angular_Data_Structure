import { Component } from '@angular/core';
import { City } from './City';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cities: City[] = [
    { id: 1, name: 'New York', country: 'USA', population: 8419600, operational: true },
    { id: 2, name: 'London', country: 'UK', population: 8982000, operational: true },
    { id: 3, name: 'Tokyo', country: 'Japan', population: 13929286, operational: false },
    { id: 4, name: 'Paris', country: 'France', population: 2148000, operational: true },
    { id: 5, name: 'Sydney', country: 'Australia', population: 5230330, operational: false }
  ];

  addCity(newCityName: string, newCityCountry: string, newCityPopulation: string) {
    if (newCityName && newCityCountry && newCityPopulation) {
      const newCity: City = {
        id: this.cities.length + 1, 
        name: newCityName,
        country: newCityCountry,
        population: +newCityPopulation,
        operational: true, 
      };
      this.cities.push(newCity);
    }
  }

  removeCity(index: number) {
    this.cities.splice(index, 1);
  }

  toggleOperationalStatus(index: number) {
    this.cities[index].operational = !this.cities[index].operational;
  }
}
