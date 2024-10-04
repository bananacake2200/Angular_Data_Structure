import { Component } from '@angular/core';
import { Tool } from './Tool';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrl: './toollist.component.css'
})
export class ToollistComponent {
  tools: Tool[] = [
    { id: 1, name: 'Hammer' },
    { id: 2, name: 'Screwdriver' },
    { id: 3, name: 'Wrench' },
    { id: 4, name: 'Pliers' },
    { id: 5, name: 'Drill' }
  ];

  addTool(name: string) {
    if (name) {
      const newTool: Tool = {
        id: this.tools.length + 1,
        name
      };
      this.tools.push(newTool);
    }
  }

  removeTool(index: number) {
    this.tools.splice(index, 1);
  }
}
