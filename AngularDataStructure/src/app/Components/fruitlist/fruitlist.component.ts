import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
fruits: string[] = [];

addFruit(newFruit: string) {
  if (newFruit) {
    this.fruits.push(newFruit);
  }
}

removeFruit(index: number) {
  this.fruits.splice(index, 1);
}

}
