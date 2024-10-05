import { Component } from '@angular/core';
import { GroceryItem } from './Grocery';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrl: './grocerylist.component.css'
})
export class GrocerylistComponent {
  groceryItems: GroceryItem[] = [];

  addGroceryItem(name: string, quantity: string) {
    if (name && quantity) {
      const newItem: GroceryItem = {
        id: this.groceryItems.length + 1,
        name,
        quantity: parseInt(quantity)
      };
      this.groceryItems.push(newItem);
    }
  }

  removeGroceryItem(index: number) {
    this.groceryItems.splice(index, 1);
  }
}
