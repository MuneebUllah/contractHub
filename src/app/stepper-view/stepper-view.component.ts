import { Component, OnInit } from '@angular/core';
import { VeriablesService } from '../veriables.service';

@Component({
  selector: 'app-stepper-view',
  templateUrl: './stepper-view.component.html',
  styleUrls: ['./stepper-view.component.scss']
})
export class StepperViewComponent implements OnInit {

  constructor(public veriableService : VeriablesService){}
ngOnInit(): void {
  
}
  componyInfo(){
    this.veriableService.corporateForm = true 
    this.veriableService.companyInfo = false 
    this.veriableService.companyState = false 
    this.veriableService.timeZone = false 
    this.veriableService.address = false 
  }
  companyCarporate(){
    this.veriableService.corporateForm = false 
    this.veriableService.companyInfo = false 
    this.veriableService.companyState = true 
    this.veriableService.timeZone = false 
    this.veriableService.address = false 
  }
  companyState(){
    this.veriableService.corporateForm = false 
    this.veriableService.companyInfo = false 
    this.veriableService.companyState = false 
    this.veriableService.timeZone = true 
    this.veriableService.address = false 
  }
  timeZone(){
    this.veriableService.corporateForm = false 
    this.veriableService.companyInfo = false 
    this.veriableService.companyState = false 
    this.veriableService.timeZone = false 
    this.veriableService.address = true 
  }
}
