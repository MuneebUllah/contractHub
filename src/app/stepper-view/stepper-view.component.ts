import { Component, OnInit } from '@angular/core';
import { VeriablesService } from '../veriables.service';
import { StepperView } from './stepper-view';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApisService } from '../apis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stepper-view',
  templateUrl: './stepper-view.component.html',
  styleUrls: ['./stepper-view.component.scss']
})
export class StepperViewComponent implements OnInit {
  private token = localStorage.getItem('token');
  model :StepperView = new StepperView() 
  constructor(public veriableService : VeriablesService ,public route : ActivatedRoute , private router : Router ,private http :HttpClient , private api:ApisService){}
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
  selectTimeZone(timeZone: string): void {
    this.model.comptimeZone = timeZone;
    // console.log(this.timeZoneValue);
  }
  selectCorporateForm(corporate: string): void {
    this.model.corporateForm = corporate;

  }
  accountCreatedMcg(){
    console.log(this.model)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('token')}` 
    });
    this.http.post(this.api.base_url + 'api/user/createCompany', this.model , { headers }).subscribe((data:any) =>{
      this.veriableService.companyName.push(data.compName)
      this.router.navigate([`/dashboard/${localStorage.getItem('token')}`])
    });
}
}
