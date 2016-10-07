import {Component} from 'angular2/core';
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({

    selector: 'courses',
    template: `<h2>Courses</h2>
                {{ title }}
                <input type="text" autoGrow />
                <ul *ngIf="courses.length > 0">
                    <li *ngFor="#course of courses, #i = index">
                        {{ i + 1}} - {{ course | uppercase }}
                    </li>       
                </ul>
                <div *ngIf="courses.length > 0">
                    There are no courses yet.
                </div>
              `,
    providers: [CourseService],
    directives: [AutoGrowDirective] 
})
export class CoursesComponent {
    title: string = "The title of the course";
    courses: string[];

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}