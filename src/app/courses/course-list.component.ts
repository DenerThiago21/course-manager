import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit{

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular Forms',
        imageUrl: '/assets/images/forms.png',
        price: 75.99,
        code: 'XPTO-4269',
        duration: 120,
        rating: 4.4,
        releaseDate: '12/05/2021'
      },
      {
        id: 2,
        name: 'Angular HTTP',
        imageUrl: '/assets/images/http.png',
        price: 100,
        code: 'JAVL-3996',
        duration: 145,
        rating: 4.7,
        releaseDate: '02/12/2019'
      }
    ]
  }

}
