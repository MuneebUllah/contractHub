import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', 
 ]
})
export class SignInComponent {
 logIn:boolean = true;
 signUp:boolean = false;
 reset:boolean = false;

 constructor(private route: ActivatedRoute) {
//   // Listen for changes in the route parameters
//   this.route.url.subscribe(segments => {
//     // Check the route segments to determine whether to show login or signup
//     this.logIn = segments[0].path === 'login';
//     this.signUp = segments[0].path === 'signup';
//   });
}

ngOnInit() {
  this.route.url.subscribe(segments => {
    // Check the route segments to determine whether to show login or signup
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
