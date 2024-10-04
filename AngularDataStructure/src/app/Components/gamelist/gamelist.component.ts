import { Component } from '@angular/core';
import { Game } from './Game';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  games: Game[] = [
    { id: 1, name: 'The Legend of Zelda: Breath of the Wild' },
    { id: 2, name: 'Super Mario Odyssey' },
    { id: 3, name: 'Minecraft' },
    { id: 4, name: 'Fortnite' },
    { id: 5, name: 'The Witcher 3: Wild Hunt' }
  ];

  addGame(name: string) {
    if (name) {
      const newGame: Game = {
        id: this.games.length + 1,
        name
      };
      this.games.push(newGame);
    }
  }

  removeGame(index: number) {
    this.games.splice(index, 1);
  }
}
