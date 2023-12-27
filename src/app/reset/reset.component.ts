import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  body :any = {}
  reset_email:string =''; 
  constructor(private http : HttpClient , private api : ApisService){}

  resetfun(){
    this.body ={
      "email" : this.reset_email
    }
    console.log(this.body)
    this.http.post(this.api.base_url + 'api/user/send-reset-link' , this.body).subscribe((data : any) =>{
      console.log(data)
    })
  }
}
