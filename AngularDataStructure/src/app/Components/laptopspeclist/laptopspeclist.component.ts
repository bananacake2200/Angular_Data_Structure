import { Component } from '@angular/core';
import { LaptopSpecification } from './LaptopSpec';

@Component({
  selector: 'app-laptopspeclist',
  templateUrl: './laptopspeclist.component.html',
  styleUrl: './laptopspeclist.component.css'
})
export class LaptopspeclistComponent {
  laptopSpecifications: LaptopSpecification[] = [];

  addSpecification(model: string, processor: string, ram: string, storage: string, displaySize: string) {
    if (model && processor && ram && storage && displaySize) {
      const newSpecification: LaptopSpecification = {
        id: this.laptopSpecifications.length + 1,
        model,
        processor,
        ram,
        storage,
        displaySize
      };
      this.laptopSpecifications.push(newSpecification);
    }
  }

  removeSpecification(index: number) {
    this.laptopSpecifications.splice(index, 1);
  }
}
