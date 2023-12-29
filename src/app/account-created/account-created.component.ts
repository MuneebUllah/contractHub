import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-account-created',
  templateUrl: './account-created.component.html',
  styleUrls: ['./account-created.component.scss']
})
export class AccountCreatedComponent implements OnInit{
  @Input() id:string = ''
  companyName:string ='Muneeb'
  private token = localStorage.getItem('token');

  constructor(public route : ActivatedRoute , private router: Router , private http:HttpClient , private api : ApisService , private auth:AuthService) {
    console.log(this.route.snapshot.params)
  }
  ngOnInit(){
    this.verifyAccount()
  }

  verifyAccount(){
    const tokens = this.route.snapshot.params['id'].toString();
    this.http.post(this.api.base_url + `api/user/verify/${this.token}` , {} ).subscribe(data =>{
      console.log(data);
    })
    localStorage.setItem('token' , tokens);
    this.router.navigate([`/dashboard/${tokens}`]);
  }

}
