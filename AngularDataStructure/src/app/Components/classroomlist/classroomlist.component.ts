import { Component } from '@angular/core';
import { Classroom } from './Classroom';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  students: Classroom[] = [];

  addStudent(name: string, age: string, gender: string) {
    if (name && age && gender) {
      const newStudent: Classroom = {
        id: this.students.length + 1,
        name,
        age: parseInt(age),
        gender: gender === 'Male' ? 'Male' : 'Female'
      };
      this.students.push(newStudent);
    }
  }

  removeStudent(index: number) {
    this.students.splice(index, 1);
  }
}
