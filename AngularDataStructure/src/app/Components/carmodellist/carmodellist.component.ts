import { Component } from '@angular/core';
import { CarModel } from './Carmodel';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  carModels: CarModel[] = [
    { id: 1, name: 'Model S', manufacturer: 'Tesla', year: 2021, price: 79999, available: true },
    { id: 2, name: 'Mustang', manufacturer: 'Ford', year: 2020, price: 55999, available: true },
    { id: 3, name: 'Civic', manufacturer: 'Honda', year: 2019, price: 24999, available: false },
    { id: 4, name: 'Corolla', manufacturer: 'Toyota', year: 2021, price: 19999, available: true },
    { id: 5, name: 'A4', manufacturer: 'Audi', year: 2022, price: 45999, available: false }
  ];

  addCarModel(name: string, manufacturer: string, year: string, price: string) {
    if (name && manufacturer && year && price) {
      const newCarModel: CarModel = {
        id: this.carModels.length + 1,
        name,
        manufacturer,
        year: +year,
        price: +price,
        available: true
      };
      this.carModels.push(newCarModel);
    }
  }

  removeCarModel(index: number) {
    this.carModels.splice(index, 1);
  }

  toggleAvailability(index: number) {
    this.carModels[index].available = !this.carModels[index].available;
  }
}
