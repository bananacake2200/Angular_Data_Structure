import { Component } from '@angular/core';
import { InventoryItem } from './Inventory';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrl: './inventorylist.component.css'
})
export class InventorylistComponent {
  inventory: InventoryItem[] = [];

  addInventoryItem(name: string, quantity: string, price: string) {
    if (name && quantity && price) {
      const newItem: InventoryItem = {
        id: this.inventory.length + 1,
        name,
        quantity: parseInt(quantity),
        price: parseFloat(price)
      };
      this.inventory.push(newItem);
    }
  }

  removeInventoryItem(index: number) {
    this.inventory.splice(index, 1);
  }
}
