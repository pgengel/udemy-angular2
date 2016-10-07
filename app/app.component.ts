import {Component} from 'angular2/core';
import {CoursesComponent} from './course.component';
import {AuthorComponent} from './author.component';
import {FavouriteComponent} from './favourite.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'
import {SummaryPipe} from './summary.pipe'
import {BootstrapPanelComponent} from './bootstrap.panel.component'
import {ContactFormComponent} from './contact-form.component'
import {ZippyComponent} from './zippy.component'
import {SignupFormComponent} from './signup-form.component'
import {SearchComponent} from './search.component'
/// <reference path="../typings/tsd.d.ts" />
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/filter'
import { PostService } from './post.service'
import { HTTP_PROVIDERS } from 'angular2/http'
import { OnInit } from 'angular2/core'
import { ReactiveComponent } from './reactive.component'
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'
import { AlbumsComponent } from './albums.component'
import { ContactComponent } from './contact.component'
import { SubscriptionComponent } from './subscription-form.component'
import { LoginComponent } from './login.component'


@RouteConfig([
    {path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true},
    {path: '/album/:id', name: 'Album', component: AlbumsComponent},
    {path: '/contact', name: 'Contact', component: ContactComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Albums']}
])

@Component({
    selector: 'my-app',
    template: `

<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a [routerLink]="['Albums']">Albums</a></li>
                <li><a [routerLink]="['Contact']">Contact</a></li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
</nav>

<login></login>

<router-outlet></router-outlet>

        <h3>8-Introduction to Reactive Extensions</h3>
        <h4>Creating an observable from DOM events</h4>
        <reactive></reactive>

        <div *ngIf="isLoading">
        <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <search></search>
        {{ course.title | uppercase }}
        <br/>
        {{ course.students | number }}
        <br/>
        {{ course.rating | number:'2.2-2' }}
        <br/>
        {{ course.price | currency:'AUD':true:'2.2-2' }}
        <br/>

        {{ course | json }}
        <br/>

        {{ post.title }}
        {{ post.body | summary:10}}

        <bs-panel>
            <div class="body">This is the body!</div>
        </bs-panel>

        <zippy>dfgdfgd</zippy>

        <signup-form></signup-form>

        <contact-form></contact-form>

        <voter></voter>
        <courses></courses>
        <authors></authors>
        <favourite [is-favourite]="post.isFavourite" (favourite-change)="onFavouriteChange($event)"></favourite>
        <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
        <div></div>
        
    `,
    directives: [CoursesComponent, 
                 LoginComponent,
                 AuthorComponent, 
                 FavouriteComponent, 
                 LikeComponent, 
                 VoterComponent, 
                 BootstrapPanelComponent,
                 ContactFormComponent,
                 ZippyComponent,
                 SignupFormComponent,
                 SearchComponent,
                 SubscriptionComponent,
                 ReactiveComponent,
                 ROUTER_DIRECTIVES],

    pipes: [SummaryPipe],
    providers: [PostService, HTTP_PROVIDERS]

})
export class AppComponent implements OnInit{ 
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
    
    post = {
        title : "Angular Tut for beginner",
        isFavourite: true,
        body: `
            dfsgdfg sdfg sdfgs, dfgsh  gsdfgse sdfgs. fghjfghj fghjh hjkghuu,
            qwerw werew asdsdfg, dfgsdfgbnnmb bnmbm. vbnmvv b vbnm.
        `
    }

    course = {
        title: "Angular 2 to start",
        rating: 4.48464,
        students: 579,
        price: 345.56,
        
    }

    tweet = {
        totalLikes: 10,
        iLike: false
    }

    onFavouriteChange($event){
        console.log($event);
    }
}