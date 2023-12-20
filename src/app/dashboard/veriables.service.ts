import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeriablesService {
 public isAdmin:boolean = false;
 public document:boolean = false;
 public templete:boolean = false;
 public setting:boolean = false;
 public contact : boolean = false;
 public account : boolean = true;
 public support : boolean = false;
 public logout : boolean = false;

  constructor() { }

  getActiveVariableName(): string {
    const activeVariable = Object.keys(this).find((key) => this[key as keyof this] === true);
    return activeVariable || 'No active variable found';
  }
}
