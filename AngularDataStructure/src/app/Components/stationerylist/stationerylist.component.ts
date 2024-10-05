import { Component } from '@angular/core';
import { Stationery } from './Stationery';

@Component({
  selector: 'app-stationerylist',
  templateUrl: './stationerylist.component.html',
  styleUrl: './stationerylist.component.css'
})
export class StationerylistComponent {
  stationeryItems: Stationery[] = [];

  addStationeryItem(name: string, quantity: string) {
    if (name && quantity) {
      const newItem: Stationery = {
        id: this.stationeryItems.length + 1,
        name,
        quantity: parseInt(quantity)
      };
      this.stationeryItems.push(newItem);
    }
  }

  removeStationeryItem(index: number) {
    this.stationeryItems.splice(index, 1);
  }
}
