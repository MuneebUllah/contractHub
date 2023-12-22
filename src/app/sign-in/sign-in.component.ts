import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', 
 ]
})
export class SignInComponent{
 logIn:boolean = false;
 signUp:boolean = false;
 reset:boolean = true;
 stepperTimeZone:boolean = false

 constructor(private route: ActivatedRoute) { }

ngOnInit() {
  this.route.url.subscribe(segments => {
    this.logIn = segments[0].path === 'login';
    this.signUp = segments[0].path === 'signup';
  });
}

logInfun(){
  this.logIn = true;
 this.signUp = false;
 console.log(this.logIn , this.signUp)
}
signupfun(){
  this.logIn =false;
  this.signUp = true;
  console.log(this.logIn , this.signUp)
 }
}
