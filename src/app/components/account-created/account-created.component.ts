import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApisService } from '../../Services/apis.service';
import { AuthService } from '../../Shared/auth/auth.service';
import { StorageService } from '../../Services/storage.service';
import { RoutingService } from '../../Services/routing.service';

@Component({
  selector: 'app-account-created',
  templateUrl: './account-created.component.html',
  styleUrls: ['./account-created.component.scss']
})
export class AccountCreatedComponent implements OnInit {
  @Input() id: string = ''
  companyName: string = 'Muneeb'

  constructor(public route: ActivatedRoute, private storage: StorageService, private router: Router, private routingService: RoutingService, private http: HttpClient, private api: ApisService, private auth: AuthService) {
    console.log(this.route.snapshot.params)
  }
  ngOnInit() {
  }

  verifyAccount() {
    const tokens = this.route.snapshot.params['id'].toString();
    console.log(tokens);
    this.http.post(this.api.base_url + `/user/verify/${tokens}`, {}).subscribe((data: any) => {
      if (data.Message) {
        this.storage.setToken(tokens);
        this.routingService.goToDashboard(tokens);
      }
    })
  }

}
