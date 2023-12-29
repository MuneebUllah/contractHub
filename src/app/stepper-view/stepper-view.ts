import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StepperView {
  compName:string = ''
  compEmail:any = '';
  comptimeZone :any = '';
  corporateForm:any ;
  compAddress:any = {
    street  : '',
    city :'',
    state  :'',
    Zip : 0,
    country:''
  };


  constructor() { }
}
