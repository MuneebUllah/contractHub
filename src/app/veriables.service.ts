import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeriablesService implements OnInit {
 public isAdmin:boolean = false;
 public document:boolean = true;
 public templete:boolean = false;
 public setting:boolean = false;
 public contact : boolean = false;
 public account : boolean = false;
 public support : boolean = false;
 public logout : boolean = false;
 public timeZone:boolean = false;
 public address : boolean = false;
 public chooseAccount:boolean=false;
 public companyInfo:boolean = true;
 public corporateForm:boolean = false;
 public companyState:boolean = false;
 public companyCreatedMcg:boolean = false; 
  constructor() { }

  getActiveVariableName(): string {
    const activeVariable = Object.keys(this).find((key) => this[key as keyof this] === true);
    return activeVariable || 'No active variable found';
  }

  ngOnInit(): void {
    
  }
}
