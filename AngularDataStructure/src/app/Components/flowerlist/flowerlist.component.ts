import { Component } from '@angular/core';
import { Flower } from './Flower';

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  flowers: Flower[] = [];

  addFlower(name: string, color: string) {
    if (name && color) {
      const newFlower: Flower = {
        id: this.flowers.length + 1,
        name,
        color
      };
      this.flowers.push(newFlower);
    }
  }

  removeFlower(index: number) {
    this.flowers.splice(index, 1);
  }
}
