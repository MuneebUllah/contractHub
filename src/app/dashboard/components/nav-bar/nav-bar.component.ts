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
export class NavBarComponent implements OnInit{
  token = this.storageService.getToken()
  isResponceReceived:boolean = false
  constructor (public veriableService: VeriablesService ,private storageService: StorageService, private header:HeaderService, public api:ApisService, public routingService:RoutingService){}
  ngOnInit(): void {
    
  }
  addContactForm(){
    this.veriableService.addContactForm = true
    // this.storageService.companyContactForm.next(true)
    this.veriableService.contact = false
    this.isResponceReceived = true
    // debugger
    // this.storageService.companyContactForm.subscribe((res:any)=>{     
    //   if(res){
    //     setTimeout(()=>{},500)
        
    //   }
    // })
  }
  sandContractForm(){
    const body = {
      documentId : this.veriableService.docId
    }
    this.veriableService.addContactFormButton = false
    this.veriableService.showEmailForm = true
  }

  notification(){

  }
  goToSetting(){
    this.routingService.goToSetting(this.header.headers)
    this.veriableService.setting = true
  }

}
