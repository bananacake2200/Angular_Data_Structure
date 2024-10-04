import { Component } from '@angular/core';
import { Country } from './Country';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent {
  countries: Country[] = [
    { id: 1, name: 'Canada', continent: 'North America' },
    { id: 2, name: 'Brazil', continent: 'South America' },
    { id: 3, name: 'China', continent: 'Asia' },
    { id: 4, name: 'Germany', continent: 'Europe' },
    { id: 5, name: 'South Africa', continent: 'Africa' },
    { id: 6, name: 'Australia', continent: 'Australia' }
  ];

  addCountry(name: string, continent: string) {
    if (name && continent) {
      const newCountry: Country = {
        id: this.countries.length + 1,
        name,
        continent
      };
      this.countries.push(newCountry);
    }
  }

  removeCountry(index: number) {
    this.countries.splice(index, 1);
  }
}
