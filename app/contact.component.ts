import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router'

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    constructor(private _route: Router){

    }
    
    onSubmit(form){
        console.log(form);
        this._route.navigate(['Albums']);
    }

    routerCanDeactivate(next, previous){
        console.log("next", next);
        console.log("previous", previous);
    }
}