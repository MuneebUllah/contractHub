import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';
import { ApisService } from 'src/app/Services/apis.service';
import { StorageService } from 'src/app/Services/storage.service';
import { RoutingService } from 'src/app/Services/routing.service';
import { VeriablesService } from 'src/app/Services/veriables.service';
import { UploadDocument } from '../../../Shared/models/uploadDocument';
import { ContractForm } from 'src/app/Shared/models/contractForm';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
})
export class DocumentComponent implements OnInit {
  createFolder:boolean = false;
  contractForm:ContractForm = new ContractForm();
  folders:any[] = []
  documents:any[] = []
  
  createFolderfun(){
    this.createFolder = true
  }
  constructor(private api: ApisService , private storageService:StorageService,private uploadDoc: UploadDocument, private veriableService:VeriablesService, private header:HeaderService ,public routingService:RoutingService){}
  token = this.storageService.getToken();
  
  ngOnInit(): void {
    this.getFolders();
    this.getDocument();
  }
  getFolders(){
    this.api.getFolders( this.header.headers).subscribe({
      next:((data:any)=>{
        this.folders = data.Folders
      }
      )
    });
  }
  openDocument(id : any){
    // this.routingService.goToViewDoc(this.token)
    this.routingService.goToViewDoc(this.token)
    this.veriableService.viewDoc = true
    this.veriableService.document = false
    this.veriableService.notificationIcon = false
    // this.uploadDoc.docURL = id
    localStorage.setItem('documentId' , id)
    console.log(this.contractForm.receivers)

  }
  getDocument(){
    this.api.getDocument(this.header.headers).subscribe({
      next:((data:any)=>{
        this.documents = data.Documents
        console.log(data)
      }
      )
    });
  }
 

  deleteRow(id:any){  
      this.api.deleteDocument(this.header.headers , id).subscribe({
        next:((data:any)=>{
          console.log(data)
        }
        )
      })
  }
}
