import { Component } from '@angular/core';
import { Animal } from './Animal';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {
  animals: Animal[] = [
    { id: 1, name: 'Lion' },
    { id: 2, name: 'Elephant' },
    { id: 3, name: 'Giraffe' },
    { id: 4, name: 'Zebra' },
    { id: 5, name: 'Kangaroo' }
  ];

  addAnimal(name: string) {
    if (name) {
      const newAnimal: Animal = {
        id: this.animals.length + 1,
        name
      };
      this.animals.push(newAnimal);
    }
  }

  removeAnimal(index: number) {
    this.animals.splice(index, 1);
  }
}
