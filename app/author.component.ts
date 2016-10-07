import { Component } from 'angular2/core';
import {AuthorService} from './author.services'

@Component({
    selector: 'authors',
    template: `<h2>Authors</h2>
                {{ title }}
                <ul>
                    <li *ngFor="#author of authors">
                    {{ author }}
                </ul>
    `,
    providers: [AuthorService]
})
export class AuthorComponent {
    title : string = "The title of the authors";
    authors : string[];

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthor()
    }
}