import { Component, OnInit } from '@angular/core';
import { VeriablesService } from '../../../Services/veriables.service';
import { RoutingService } from 'src/app/Services/routing.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent  implements OnInit{
  constructor (public veriableService: VeriablesService , public routingService:RoutingService){}
  ngOnInit(): void {
    
  }
  addContactForm(){
    this.veriableService.addContactForm = true
    this.veriableService.contact = false
  }

}
