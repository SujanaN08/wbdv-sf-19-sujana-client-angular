import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import LessonService from '../services/lesson.service';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private service: LessonService) { }

  courseId = '';
  moduleId = '';
  lessonId = '';
  lessons = ['1', '2'];

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.lessonId = params.lid;
      if (this.courseId !== '') {
      this.service.findLessonsForModule(this.moduleId)
        .then(lessons => this.lessons = lessons);
      }
    });
  }
}
