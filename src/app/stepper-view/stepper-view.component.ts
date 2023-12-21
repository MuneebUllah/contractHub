import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper-view',
  templateUrl: './stepper-view.component.html',
  styleUrls: ['./stepper-view.component.scss']
})
export class StepperViewComponent {
timeZone:boolean = false;
address : boolean = false;
chooseAccount:boolean=true;
companyInfo:boolean = false;
corporateForm:boolean = false;
companyState:boolean = false;
companyCreatedMcg:boolean = false;
companyName:string ='Muneeb' 
}
