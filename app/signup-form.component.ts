import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { UsernameValidators } from './usernameValidators'

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.template.html'
})
export class SignupFormComponent {
    
    form: ControlGroup;
    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: ['', 
                      Validators.compose([Validators.required, 
                                          UsernameValidators.cannotContainSpace]), //customer validators 
                      UsernameValidators.shouldBeUnique],//customer async validators
            password: ['', Validators.required]
        });
    }

    ////Model driven forms
    // form =  new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });

    // signup(){
    //     console.log(this.form.value);
    // }

    signup(){ // this will check when the user clicks on the submit button that there are
            // no errors.
        this.form.find('username').setErrors({invalidLogin:true});
        console.log(this.form.value);
    }
}