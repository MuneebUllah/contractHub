import { Injectable, OnInit } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class VeriablesService implements OnInit {
 public userName:string = '';
 public document:boolean = true;
 public templete:boolean = false;
 public setting:boolean = false;
 public contact : boolean = false;
 public account : boolean = false;
 public logout : boolean = false;
 public timeZone:boolean = false;
 public address : boolean = false;
 public chooseAccount:boolean=false;
 public companyInfo:boolean = true;
 public corporateForm:boolean = false;
 public companyState:boolean = false;
 public companyCreatedMcg:boolean = false; 
 public companyName:any =[]
 public addContactForm:boolean = false;
 public viewDoc:boolean = false;
 public sandContractForm:boolean = false
 public showEmailForm:boolean = false
 public docId : string = '';
 public notificationIcon:boolean = true
 public sidebarOpen: boolean = false;
 public addContactFormButton:boolean =false
  constructor(private storage:StorageService) { }

  getActiveVariableName(): string {
    const activeVariable = Object.keys(this).find((key) => this[key as keyof this] === true);
    {
      return activeVariable || 'No active variable found';}
  }

  ngOnInit(): void {
    
  }
}
