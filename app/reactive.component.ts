/// <reference path="../typings/tsd.d.ts" />
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/filter'
import { Component } from 'angular2/core';
import { PostService } from './post.service'
import { HTTP_PROVIDERS } from 'angular2/http'
import { OnInit } from 'angular2/core'

@Component({
    selector: 'reactive',
    templateUrl: 'app/reactive.template.html',
    providers: [PostService, HTTP_PROVIDERS]

})
export class ReactiveComponent {
    // constructor(){
    //         //Creating an observable from DOM events
    //         var element = $("#search");
    //         var observable = Observable.fromEvent(element, "keyup");
    // }
    

}