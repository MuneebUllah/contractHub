import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContractForm } from '../Shared/models/contractForm';

@Injectable({
  providedIn: 'root',
})
export class ContractFormService {
//   private contractFormSource = new BehaviorSubject<ContractForm>(new ContractForm());
//   contractForm$ = this.contractFormSource.asObservable();
receivers:any[] =  []
 contractFormSource = {
    documentId:'',
    receivers:this.receivers,
 }

  updateDocumentId(documentId: string) {
    // const currentForm = this.contractFormSource.value;
    // this.contractFormSource.next({ ...currentForm, documentId });
    console.log(documentId)
    this.contractFormSource.documentId = documentId
  }

  updateReceivers(receivers: any[]) {
    // const currentForm = this.contractFormSource.value;
    // this.contractFormSource.next({ ...currentForm, receivers });
    console.log(receivers)
    this.contractFormSource.receivers = receivers


  }
}