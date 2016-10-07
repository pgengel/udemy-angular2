import { Component } from 'angular2/core';

@Component({
    selector: 'voter',
    templateUrl: 'app/voter.template.html',
    styleUrls: ['app/voter.style.css'],
    
})
export class VoterComponent  {

    votes: number = 0;

    voteUp(){
        this.votes++;
    }

    voteDown(){
        this.votes--;
    }
}