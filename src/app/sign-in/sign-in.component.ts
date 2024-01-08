import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from '../apis.service';
import { AuthService } from '../auth/auth.service';
import { VeriablesService } from '../veriables.service';
import { RoutingService } from '../Services/routing.service';
import { StorageService } from '../Services/storage.service';
import { SignIn } from '../Shared/models/signIn.model';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss',
  ]
})
export class SignInComponent implements OnInit {
  user:SignIn =new SignIn();

  constructor(public VeriablesService: VeriablesService, public storage: StorageService, public routingService: RoutingService, private route: ActivatedRoute,  private api: ApisService,  private auth: AuthService) { }

  ngOnInit() { }
  isSignInButtonEnabled(): string | boolean {
    return (
      this.user.email &&
      this.user.password &&
      this.user.checkboxChecked
    );
  }

  logInfun() {
    this.api.signIn(this.user).subscribe((data:any) => {
      next:(
      localStorage.setItem('token' , data.Token),
      this.routingService.goToDashboard(data.Token)
    )}
    )
  }

}
