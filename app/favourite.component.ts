import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'favourite',
    templateUrl: `app/favourite.template.html`,
    styles: [` .glyphicon-star {
                    color: orange;
                } 
            `]
})
export class FavouriteComponent  {
    @Input('is-favourite') isFavourite = false;

    @Output('favourite-change') change = new EventEmitter();

    onClick(){
        this.isFavourite = !this.isFavourite;
        this.change.emit({newValue: this.isFavourite});
    }

    canSave = true;

    imgageUrl = "http://lorempixel.com/400/200/sports/Dummy-Text/";
}