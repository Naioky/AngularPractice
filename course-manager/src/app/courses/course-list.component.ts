import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: './assets/images/forms.png',
                price: 99.99,
                code: 'XPS-6854',
                duration: 120,
                rating: 5,
                releaseDate: 'December, 4, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: './assets/images/http.png',
                price: 45.90,
                code: 'XPP-6854',
                duration: 40,
                rating: 2.5,
                releaseDate: 'November, 2, 2019'
            }

        ]
    }
}