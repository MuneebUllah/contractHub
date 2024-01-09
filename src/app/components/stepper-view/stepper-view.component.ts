import { Component, OnInit } from '@angular/core';
import { VeriablesService } from '../../Services/veriables.service';
import { StepperView } from './stepper-view';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApisService } from '../../Services/apis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingService } from '../../Services/routing.service';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-stepper-view',
  templateUrl: './stepper-view.component.html',
  styleUrls: ['./stepper-view.component.scss']
})
export class StepperViewComponent implements OnInit {
  corporateActiveButton: number | null = null;
  timeActiveButton: number | null = null;
  private token = localStorage.getItem('token');
  stepperViewBody :StepperView = new StepperView() 
corpactiveButton: any;
activeButton: any;
  constructor(public veriableService : VeriablesService ,private header:HeaderService, public routingService:RoutingService , public route : ActivatedRoute , private router : Router ,private http :HttpClient , private api:ApisService){}
ngOnInit(): void {
  
}
  componyInfo(){
    this.veriableService.corporateForm = true 
    this.veriableService.companyInfo = false 
    this.veriableService.companyState = false 
    this.veriableService.timeZone = false 
    this.veriableService.address = false 
    this.veriableService.companyCreatedMcg = false 
  }
  companyCarporate(){
    this.veriableService.corporateForm = false 
    this.veriableService.companyInfo = false 
    this.veriableService.companyState = true 
    this.veriableService.timeZone = false 
    this.veriableService.address = false 
    this.veriableService.companyCreatedMcg = false 
  }
  companyState(){
    this.veriableService.corporateForm = false 
    this.veriableService.companyInfo = false 
    this.veriableService.companyState = false 
    this.veriableService.timeZone = true 
    this.veriableService.address = false 
    this.veriableService.companyCreatedMcg = false 
  }
  timeZone(){
    this.veriableService.corporateForm = false 
    this.veriableService.companyInfo = false 
    this.veriableService.companyState = false 
    this.veriableService.timeZone = false 
    this.veriableService.address = true 
    this.veriableService.companyCreatedMcg = false 
  }
  address(){
    this.veriableService.corporateForm = false 
    this.veriableService.companyInfo = false 
    this.veriableService.companyState = false 
    this.veriableService.timeZone = false 
    this.veriableService.address = false 
    this.veriableService.companyCreatedMcg = true 
  }
  selectTimeZone(timeZone: string , buttonNumber: number): void {
    this.stepperViewBody.comptimeZone = timeZone;
    if (this.timeActiveButton === buttonNumber) {
      // If the same button is clicked again, deactivate it
      this.timeActiveButton = null;
    } else {
      // Otherwise, activate the clicked button
      this.timeActiveButton = buttonNumber;
    }
  }
  
  isFormValid(): boolean {
    return this.stepperViewBody.compName && this.stepperViewBody.compEmail;
  }
  isTimeFormValid(): boolean {
    return this.timeActiveButton !== null;
  }
  isCorporateFormValid(): boolean {
    return this.corporateActiveButton !== null;
  }
  exit(){
    this.routingService.goToDashboard(localStorage.getItem('token'))
  }
  selectCorporateForm(corporate: string , buttonNumber:number): void {
    this.stepperViewBody.corporateForm = corporate;
    if (this.corporateActiveButton === buttonNumber) {
      // If the same button is clicked again, deactivate it
      this.corporateActiveButton = null;
    } else {
      // Otherwise, activate the clicked button
      this.corporateActiveButton = buttonNumber;
    }


  }

  accountCreatedMcg(){
    console.log(this.stepperViewBody)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTlkMWU1NmY4YzhjNWZjY2M2NjY2YjgiLCJpYXQiOjE3MDQ3OTU3MzQsImV4cCI6MTcwNDc5OTMzNH0.aVpNhNi_HLozA13vQr8rZuqfRaFsSXuDHffDQOvhHBY` 
    });
    this.api.stepperView( this.stepperViewBody ,this.header.headers ).subscribe(
     { next:(data:any) =>{
      this.veriableService.companyName.push(data.compName)
      this.router.navigate([`/dashboard/${localStorage.getItem('token')}`])
    }});
}
}
