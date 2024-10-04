import { Component } from '@angular/core';
import { Language } from './Language';

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrl: './languagelist.component.css'
})
export class LanguagelistComponent {
  languages: Language[] = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Spanish' },
    { id: 3, name: 'Mandarin' },
    { id: 4, name: 'Hindi' },
    { id: 5, name: 'Arabic' }
  ];

  addLanguage(name: string) {
    if (name) {
      const newLanguage: Language = {
        id: this.languages.length + 1,
        name
      };
      this.languages.push(newLanguage);
    }
  }

  removeLanguage(index: number) {
    this.languages.splice(index, 1);
  }
}
