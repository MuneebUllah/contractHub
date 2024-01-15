import { Component, OnInit } from '@angular/core';
import { VeriablesService } from '../../../Services/veriables.service';
import { RoutingService } from 'src/app/Services/routing.service';
import { ApisService } from 'src/app/Services/apis.service';
import { HeaderService } from 'src/app/Services/header.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent  implements OnInit{
  token = this.storageService.getToken()
  constructor (public veriableService: VeriablesService ,private storageService: StorageService, private header:HeaderService, public api:ApisService, public routingService:RoutingService){}
  ngOnInit(): void {
    
  }
  addContactForm(){
    this.veriableService.addContactForm = true
    this.veriableService.contact = false
  }
  sandContractForm(){
    const body = {
      documentId : this.veriableService.docId
    }
    // this.api.sandContract(body , this.header.headers).subscribe({
    //   next:((data:any)=>{
    //     console.log(data)
    //     this.routingService.goToContact(this.token)
    //   }

    //   )
    // })
    // this.routingService.goToContact(this.token);
    this.veriableService.contact = true;
    this.veriableService.showEmailForm = true
  }

  notification(){

  }
  goToSetting(){
    this.routingService.goToSetting(this.header.headers)
    this.veriableService.setting = true
  }

}
