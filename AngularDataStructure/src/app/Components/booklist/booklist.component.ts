import { Component } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
 books: Book[] = [
  { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian', year: 1949, available: true },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', year: 1960, available: false },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', year: 1925, available: true },
  { id: 4, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', year: 1851, available: true },
  { id: 5, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'Historical', year: 1869, available: false }
];


addBook(newBookTitle: string, newBookAuthor: string, newBookGenre: string, newBookYear: string) {
  if (newBookTitle && newBookAuthor && newBookGenre && newBookYear) {
    const newBook: Book = {
      id: this.books.length + 1, 
      title: newBookTitle,
      author: newBookAuthor,
      genre: newBookGenre,
      year: +newBookYear, 
      available: true,   
    };
    this.books.push(newBook);
  }
}


removeBook(index: number) {
  this.books.splice(index, 1);
}

toggleAvailability(index: number) {
  this.books[index].available = !this.books[index].available;
}
}
