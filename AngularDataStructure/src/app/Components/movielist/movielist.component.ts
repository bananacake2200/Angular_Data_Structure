import { Component } from '@angular/core';
import { Movie } from './Movie';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movies: Movie[] = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', director: 'Christopher Nolan', releaseYear: 2010, isShowing: true },
    { id: 2, title: 'The Dark Knight', genre: 'Action', director: 'Christopher Nolan', releaseYear: 2008, isShowing: true },
    { id: 3, title: 'Interstellar', genre: 'Sci-Fi', director: 'Christopher Nolan', releaseYear: 2014, isShowing: false },
    { id: 4, title: 'The Matrix', genre: 'Sci-Fi', director: 'Lana Wachowski, Lilly Wachowski', releaseYear: 1999, isShowing: true },
    { id: 5, title: 'Avengers: Endgame', genre: 'Action', director: 'Anthony Russo, Joe Russo', releaseYear: 2019, isShowing: false }
  ];

  addMovie(title: string, genre: string, director: string, releaseYear: string) {
    if (title && genre && director && releaseYear) {
      const newMovie: Movie = {
        id: this.movies.length + 1,
        title,
        genre,
        director,
        releaseYear: +releaseYear,
        isShowing: true
      };
      this.movies.push(newMovie);
    }
  }

  removeMovie(index: number) {
    this.movies.splice(index, 1);
  }

  toggleIsShowing(index: number) {
    this.movies[index].isShowing = !this.movies[index].isShowing;
  }
}
