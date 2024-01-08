import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from '../apis.service';
import { AuthService } from '../auth/auth.service';
import { VeriablesService } from '../veriables.service';
import { RoutingService } from '../Services/routing.service';
import { Signup } from '../Shared/models/signup.model';
import { PopupsService } from '../Services/popups.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: Signup = new Signup();

  ngOnInit(): void { }
  isRegisterButtonEnabled(): string | boolean {
    return (
      this.user.name &&
      this.user.email &&
      this.user.password &&
      this.user.cnfrmPassword &&
      this.user.password.length >= 8 &&
      this.user.checkboxChecked
    );
  }

  constructor(public VeriablesService: VeriablesService, private popup: PopupsService, private route: ActivatedRoute, private http: HttpClient, private api: ApisService, public routingService: RoutingService, private auth: AuthService) { }

  signupfun() {
    if (this.user.password === this.user.cnfrmPassword) {
      this.api.register(this.user).subscribe((data: any) => {
        if (data.Message) {
          alert("Please Check User Email")
        }

      })
    }
    else {
      alert("please Enter The Correct Password")
    }
  }
}
