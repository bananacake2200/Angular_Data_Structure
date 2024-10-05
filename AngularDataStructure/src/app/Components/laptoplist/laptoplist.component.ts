import { Component } from '@angular/core';
import { Laptop } from './Laptop';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent {
  laptops: Laptop[] = [];

  addLaptop(model: string, brand: string) {
    if (model && brand) {
      const newLaptop: Laptop = {
        id: this.laptops.length + 1,
        model,
        brand
      };
      this.laptops.push(newLaptop);
    }
  }

  removeLaptop(index: number) {
    this.laptops.splice(index, 1);
  }
}
