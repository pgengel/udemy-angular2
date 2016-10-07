import { Component, Input } from 'angular2/core'

@Component({
    selector: `like`,
    templateUrl: `app/like.template.html`,
    styles: ['app/like.style.css'],
})

export class LikeComponent {
    
    @Input() totalLikes = 0;
    @Input() iLike = false;

    onClick(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }
}