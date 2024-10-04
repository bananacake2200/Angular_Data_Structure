import { Component } from '@angular/core';
import { Song } from './MusicPlaylist';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrl: './musicplaylist.component.css'
})
export class MusicplaylistComponent {
  songs: Song[] = [];

  addSong(title: string, artist: string) {
    if (title && artist) {
      const newSong: Song = {
        id: this.songs.length + 1,
        title,
        artist
      };
      this.songs.push(newSong);
    }
  }

  removeSong(index: number) {
    this.songs.splice(index, 1);
  }
}
