import { Component } from '@angular/core';
import { Software } from './Software';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent {
  softwareList: Software[] = [
    { id: 1, name: 'Microsoft Office' },
    { id: 2, name: 'Adobe Photoshop' },
    { id: 3, name: 'Google Chrome' },
    { id: 4, name: 'Visual Studio Code' },
    { id: 5, name: 'Zoom' }
  ];

  addSoftware(name: string) {
    if (name) {
      const newSoftware: Software = {
        id: this.softwareList.length + 1,
        name
      };
      this.softwareList.push(newSoftware);
    }
  }

  removeSoftware(index: number) {
    this.softwareList.splice(index, 1);
  }
}
