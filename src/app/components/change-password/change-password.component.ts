import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApisService } from '../../Services/apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  pass :boolean = false
  newPassword : any = ''
  confrmPassword : any = ''
  token:any =localStorage.getItem('token')

  constructor (private http:HttpClient , private api : ApisService , private router : Router) {

  }
 changePass(){
  if(this.newPassword === this.confrmPassword){
    this.http.post(this.api.base_url + `api/user/verify-reset-link/${this.token}` , {newPassword :this.newPassword})
    this.router.navigate(['/login'])
    this.pass = true;
  }
  else{
    alert("Please Enter The Correct Password");
  }
}

}
