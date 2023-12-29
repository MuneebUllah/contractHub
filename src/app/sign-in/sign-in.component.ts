import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from '../apis.service';
import { AuthService } from '../auth/auth.service';
import { VeriablesService } from '../veriables.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss',
  ]
})
export class SignInComponent implements OnInit {
  
  logIn: boolean = false;
  signUp: boolean = false;
  reset: boolean = false;
  stepperTimeZone: boolean = false;
  checkboxChecked:boolean = false;
  body = {  };
  data = {};

  constructor(public VeriablesService :VeriablesService , private route: ActivatedRoute, private http: HttpClient , private api :ApisService , private router:Router , private auth: AuthService) { }
  private tokens= localStorage.getItem('token');

  ngOnInit() {
    this.route.url.subscribe(segments => {
      this.logIn = segments[0].path === 'login';
      this.signUp = segments[0].path === 'signup';
    });
  }

  logInfun() {
    this.body = {
      email:this.VeriablesService.reg_email,
      password:this.VeriablesService.reg_password,
    };
    this.http.post(this.api.base_url + 'api/user/login', this.body).subscribe((data:any) => {
      if(data ){
      console.log(data)
      localStorage.setItem('token' , data.Token)
      this.router.navigate([`/dashboard/${data.Token}` ]);
   } })
}
  signupfun() {  
    this.body = {
    name:this.VeriablesService.reg_name,
    email:this.VeriablesService.reg_email,
    password:this.VeriablesService.reg_password,
  };
  console.log(this.body);
  this.http.post(this.api.base_url + 'api/user/register', this.body).subscribe(data => {
    // const content = data.Token
    // localStorage.setItem('t)

  })
  }
}
