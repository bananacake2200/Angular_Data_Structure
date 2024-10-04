import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 899.99, inStock: true },
    { id: 2, name: 'Headphones', category: 'Accessories', price: 199.99, inStock: true },
    { id: 3, name: 'Chair', category: 'Furniture', price: 79.99, inStock: false },
    { id: 4, name: 'Desk', category: 'Furniture', price: 149.99, inStock: true },
    { id: 5, name: 'Smartphone', category: 'Electronics', price: 699.99, inStock: false }
  ];

  addProduct(name: string, category: string, price: string) {
    if (name && category && price) {
      const newProduct: Product = {
        id: this.products.length + 1,
        name,
        category,
        price: +price,
        inStock: true
      };
      this.products.push(newProduct);
    }
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }

  toggleInStock(index: number) {
    this.products[index].inStock = !this.products[index].inStock;
  }
}
