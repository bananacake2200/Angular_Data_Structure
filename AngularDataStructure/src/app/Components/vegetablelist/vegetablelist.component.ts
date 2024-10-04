import { Component } from '@angular/core';
import { Vegetable } from './Vegetable';

@Component({
  selector: 'app-vegetablelist',
  templateUrl: './vegetablelist.component.html',
  styleUrl: './vegetablelist.component.css'
})
export class VegetablelistComponent {
  vegetables: Vegetable[] = [
    { id: 1, name: 'Carrot', type: 'Root' },
    { id: 2, name: 'Spinach', type: 'Leafy Green' },
    { id: 3, name: 'Broccoli', type: 'Cruciferous' },
    { id: 4, name: 'Potato', type: 'Tuber' },
    { id: 5, name: 'Tomato', type: 'Fruit Vegetable' }
  ];

  addVegetable(name: string, type: string) {
    if (name && type) {
      const newVegetable: Vegetable = {
        id: this.vegetables.length + 1,
        name,
        type
      };
      this.vegetables.push(newVegetable);
    }
  }

  removeVegetable(index: number) {
    this.vegetables.splice(index, 1);
  }
}
