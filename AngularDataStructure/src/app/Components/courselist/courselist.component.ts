import { Component } from '@angular/core';
import { Course } from './Course';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {

 courses: Course[] = [
  { id: 1, name: 'Bachelor of Science in Information Technology', description: 'Learn IT fundamentals and advanced technologies.', duration: '4 years', fee: 50000 },
  { id: 2, name: 'Bachelor of Science in Computer Science', description: 'Focus on computer systems and software development.', duration: '4 years', fee: 52000 },
  { id: 3, name: 'Bachelor of Science in Business Administration', description: 'Study business management and operations.', duration: '4 years', fee: 48000 },
  { id: 4, name: 'Associate in Computer Technology', description: '2-year program focused on computer hardware and networking.', duration: '2 years', fee: 25000 },
  { id: 5, name: 'Master of Business Administration', description: 'Advanced studies in business management and leadership.', duration: '2 years', fee: 60000 }
];

addCourse(newCourseName: string, newCourseDuration: string, newCourseFee: string) {
  if (newCourseName && newCourseDuration && newCourseFee) {
    const newCourse: Course = {
      id: this.courses.length + 1, 
      name: newCourseName,
      duration: newCourseDuration,
      fee: +newCourseFee, 
    };
    this.courses.push(newCourse);
  }
}

removeCourse(index: number) {
  this.courses.splice(index, 1);
}
}
