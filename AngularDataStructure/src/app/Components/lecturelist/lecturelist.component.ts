import { Component } from '@angular/core';
import { Lecture } from './Lecture';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectures: Lecture[] = [];

  addLecture(topic: string, date: string, time: string) {
    if (topic && date && time) {
      const newLecture: Lecture = {
        id: this.lectures.length + 1,
        topic,
        date,
        time
      };
      this.lectures.push(newLecture);
    }
  }

  removeLecture(index: number) {
    this.lectures.splice(index, 1);
  }
}
