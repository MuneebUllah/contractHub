import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { VeriablesService } from './veriables.service';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  // =========== CONSTRUCTOR ============

  constructor(private routes: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private veriableService:VeriablesService) { }

  customRoute(route: string) {
    this.routes.navigate([route]);
  }

  goToHome(data?: any) {
    if (data)
      this.routes.navigate([""], { queryParams: data })
    else
      this.routes.navigate(['']);
  }
  goToLogin(){
    this.routes.navigate(['/login'])
  }
  goToSignup(){
    this.routes.navigate(['/signup'])
  }
  goToDashboard(data?:any){
    // this.routes.navigate([`/dashboard/${data}` ]);
    this.routes.navigate([`/dashboard` ], { queryParams: data });
  }
  goToDocument(data:any){
    // this.routes.navigate([`/dashboard/${data}/document` ]);
    this.routes.navigate([`/dashboard/document` ]);
    this.veriableService.document = true;
    this.veriableService.templete = false;
    this.veriableService.setting = false;
    this.veriableService.contact = false;
    this.veriableService.account = false;   
    this.veriableService.addContactFormButton = false;    
    this.veriableService.sandContractForm = false
    this.veriableService.notificationIcon = true
    this.veriableService.viewDoc = false
  }
  goToTemplete(data:any){
    // this.routes.navigate([`/dashboard/${data}/templete` ]);
    this.routes.navigate([`/dashboard/templete` ]);
  }
  goToContact(data:any){
    this.routes.navigate([`/dashboard/contact` ]);
    this.veriableService.document = false;
    this.veriableService.templete = false;
    this.veriableService.setting = false;
    this.veriableService.contact = true;
    this.veriableService.addContactFormButton = true;
    this.veriableService.viewDoc = false
    this.veriableService.account = false;
    this.veriableService.sandContractForm = false
    this.veriableService.notificationIcon = false
    this.veriableService.viewDoc = false

  }
  goToSetting(data:any){
    this.routes.navigate([`/dashboard/setting` ]);
    this.veriableService.document = false;
    this.veriableService.templete = false;
    this.veriableService.setting = true;
    this.veriableService.contact = false;
    this.veriableService.viewDoc = false
    this.veriableService.account = false
    this.veriableService.addContactFormButton = false;
    this.veriableService.sandContractForm = false
    this.veriableService.notificationIcon = true
    this.veriableService.viewDoc = false

  }
  goToCanvas(){
    this.routes.navigate([`/dashboard/convas` ]);
  }
  goToAccount(){
    this.routes.navigate([`/dashboard/account` ]);
  }
  goToCreateAccount(){
    this.routes.navigate([`/new-account` ]);
    this.veriableService.corporateForm = false
    this.veriableService.companyInfo = true
    this.veriableService.companyState = false
    this.veriableService.viewDoc = false
    this.veriableService.timeZone = false
    this.veriableService.address = false
    this.veriableService.viewDoc = false

  }
  goToViewDoc(){
    this.routes.navigate([`/dashboard/view-doc` ]);
  }

  goToMyProfile() {
    this.routes.navigate(['/my-profile'])
  }

  goToUserProfile(id: string) {
    this.routes.navigate([`/chats/profile/${id}`])
  }
  goBack() {
    this.location.back()
  }
}
