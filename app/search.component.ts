/// <reference path="../typings/tsd.d.ts" />
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/filter'
import { Component } from 'angular2/core';
import { PostService } from './post.service'
import { HTTP_PROVIDERS } from 'angular2/http'
import { OnInit } from 'angular2/core'

@Component({

    selector: 'search',
    templateUrl: 'app/search.template.html',
    providers: [PostService, HTTP_PROVIDERS]
})
export class SearchComponent  {
       isLoading = true;
    
    constructor(private _postService: PostService){
        this._postService.createPost({userId: 1, title: 'a', body: "b"});
    }

    ngOnInit(){
            this._postService.getPosts()
            .subscribe(post => {
                console.log(post[0].title);
                this.isLoading = false;
            });  
    }

    // constructor() { 
           //var observable	= Observable.fromArray([1, 2, 3]);

        // var	startDates	=	[];
        // var	startDate	=	new	Date();	//	Assuming	today	for	simplicity
        // for	(var	day	=	-2;	day	<=	2;	day++)	{
        // 				var	date	=	new	Date(
        // 								startDate.getFullYear(),	
        // 								startDate.getMonth(),
        // 								startDate.getDate()	+	day);	
        //								startDates.push(date);
        //              }	

        // Observable
		// 		.fromArray(startDates)
		// 		.map(date	=>	console.log("Getting	deals	for	date	"	+	date);
        //                         return	[1,	2,	3];)
		// 		.subscribe(x	=>	console.log(x));


        //Implementing a timer
        // var	observable	=	Observable.interval(1000);	
        // observable.subscribe(x	=>	console.log(x));
        
    //     var keyups = Observable.fromEvent($("#search"), "keyup")   	
    //                     .map(e => e.target.value)
    //                     .filter(text => text.length >= 3)
    //                     .debounceTime(400)
    //                     .distinctUntilChanged()
    //                     .map(searchTerm => {
    //                         var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
    //                         var promise = $.getJSON(url);
    //                         var observable = Observable.fromPromise(promise);
    //                     });

    //     var subsribe = keyups.subscribe(data => console.log(data));
    //     subsribe.unsubscribe();
    // }
   
}