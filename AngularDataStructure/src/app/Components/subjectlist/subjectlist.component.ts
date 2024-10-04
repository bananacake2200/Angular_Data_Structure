import { Component } from '@angular/core';
import { Subject } from './Subject';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent {
  subjects: Subject[] = [
    { id: 1, name: 'Mathematics', code: 'MATH101', teacher: 'Mr. John Doe', units: 3, isRequired: true },
    { id: 2, name: 'English', code: 'ENG102', teacher: 'Ms. Jane Smith', units: 3, isRequired: true },
    { id: 3, name: 'Physics', code: 'PHY103', teacher: 'Dr. Emily Brown', units: 4, isRequired: false },
    { id: 4, name: 'Computer Science', code: 'CS104', teacher: 'Mr. Michael Johnson', units: 5, isRequired: true },
    { id: 5, name: 'History', code: 'HIST105', teacher: 'Ms. Linda Green', units: 2, isRequired: false }
  ];

  addSubject(name: string, code: string, teacher: string, units: string) {
    if (name && code && teacher && units) {
      const newSubject: Subject = {
        id: this.subjects.length + 1,
        name,
        code,
        teacher,
        units: +units,
        isRequired: true
      };
      this.subjects.push(newSubject);
    }
  }

  removeSubject(index: number) {
    this.subjects.splice(index, 1);
  }

  toggleIsRequired(index: number) {
    this.subjects[index].isRequired = !this.subjects[index].isRequired;
  }
}
