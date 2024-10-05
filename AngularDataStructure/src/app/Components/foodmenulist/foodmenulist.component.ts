import { Component } from '@angular/core';
import { FoodItem } from './Foodmenu';

@Component({
  selector: 'app-foodmenulist',
  templateUrl: './foodmenulist.component.html',
  styleUrl: './foodmenulist.component.css'
})
export class FoodmenulistComponent {
  menu: FoodItem[] = [];

  addFoodItem(name: string, price: string) {
    if (name && price) {
      const newFoodItem: FoodItem = {
        id: this.menu.length + 1,
        name,
        price: parseFloat(price)
      };
      this.menu.push(newFoodItem);
    }
  }

  removeFoodItem(index: number) {
    this.menu.splice(index, 1);
  }
}
