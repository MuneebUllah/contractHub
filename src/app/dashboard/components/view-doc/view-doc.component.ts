import { Component, OnInit } from '@angular/core';
import { UploadDocument } from '../../../Shared/models/uploadDocument';
import { DragableService } from 'src/app/Services/Dragable.service';
import { DragulaService } from 'ng2-dragula';
import { DragulaModule } from 'ng2-dragula';
import { ApisService } from 'src/app/Services/apis.service';
import { HeaderService } from 'src/app/Services/header.service';
import { ContractForm } from 'src/app/Shared/models/contractForm';
import { VeriablesService } from 'src/app/Services/veriables.service';
// import { DragulaService } from "ng2-dragula";

@Component({
  selector: 'app-view-doc',
  templateUrl: './view-doc.component.html',
  styleUrls: ['./view-doc.component.scss']
})
export class ViewDocComponent implements OnInit{
  private _url: any;
  // contractForm:ContractForm =new ContractForm()
  uploadDocument: UploadDocument = new UploadDocument();
  contractForm:ContractForm = new ContractForm();
  docUrl: any;
  allContacts :any[] = [];
  constructor(private dragulaService: DragulaService ,public veriableService:VeriablesService, private api:ApisService , private header:HeaderService) {
    dragulaService.createGroup('COPYABLE', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      // accepts: (el, target, source, sibling) => {
      //   // To avoid dragging from right to left container
      //   return target.id !== 'left';
      // }
    });
  }
  ngOnInit(): void {
    this.getDocUrl();
    this.getAllContact()
    console.log(this.contractForm)
  }
  get url(): any {
    return this._url;
  }

  set url(value: any) {
    this._url = value;
    this.getDocUrl();
    console.log(this._url);
  }

  getDocUrl() {
    this.docUrl = this.uploadDocument.docURL;
    console.log(this.docUrl);
  }
  receivemail(id:any){
    this.contractForm.receivers = id
    console.log(id)
  }
  sandContract(){
    this.api.sandContract(this.contractForm , this.header.headers).subscribe({
      next:((data)=>{
        console.log(data, this.contractForm);
      })
    })
  }
  
  getAllContact(){
    this.api.getAllContact(this.header.headers).subscribe({
      next:((data:any)=>{
        this.allContacts = data.Contacts;
    console.log(this.allContacts);
    
  }       
    
  )
})
}
}


// let personId = 0;

// class Person {
//   id: number;
//   constructor(public name: string) {
//     this.id = personId++;
//   }
// }
// @Component({
//   selector: 'app-view-doc',
//   templateUrl: './view-doc.component.html',
//   styleUrls: ['./view-doc.component.scss']
// })
// export class ViewDocComponent implements OnInit {
//   private _url: any;
//   uploadDocument: UploadDocument = new UploadDocument();
//   docUrl: any;
//   left = [
//     new Person('Steven'),
//     new Person('Paula'),
//     new Person('Persephone'),
//     new Person('Jacob'),
//   ];
//   right = [
//     new Person('Delia'),
//     new Person('Jackson'),
//   ];
//   ngOnInit(): void {
//         this.getDocUrl()
//       }
//       get url(): any {
//         return this._url;
//       }
    
//       set url(value: any) {
//         this._url = value;
//         this.getDocUrl();
//         console.log(this._url);
//       }
    
//       getDocUrl() {
//         this.docUrl = this.uploadDocument.docURL;
//         console.log(this.docUrl);
//       }
//   constructor(private dragulaService: DragulaService) {
//     dragulaService.createGroup('PERSON', {
//       copy: (el, source) => {
//         return source.id === 'left';
//       },
//       copyItem: (person: Person) => {
//         return new Person(person.name);
//       },
//       // accepts: (el, target, source, sibling) => {
//       //   // To avoid dragging from right to left container
//       //   return target.id !== 'left';
//       // }
//     });
//   }

// }