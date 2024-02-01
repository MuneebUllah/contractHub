import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { UploadDocument } from '../../../Shared/models/uploadDocument';
import { DragableService } from 'src/app/Services/Dragable.service';
import { DragulaService } from 'ng2-dragula';
import { ApisService } from 'src/app/Services/apis.service';
import { HeaderService } from 'src/app/Services/header.service';
import { ContractForm } from 'src/app/Shared/models/contractForm';
import { VeriablesService } from 'src/app/Services/veriables.service';
import { ContractFormService } from 'src/app/Services/contractForm.Service';
import {  ViewChild } from '@angular/core';
import { DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';
import { RoutingService } from 'src/app/Services/routing.service';

@Component({
  selector: 'app-view-doc',
  templateUrl: './view-doc.component.html',
  styleUrls: ['./view-doc.component.scss']
})
export class ViewDocComponent implements OnInit, AfterViewInit {
  private _url: any;
  @ViewChild('draggableInput') draggableInput!: ElementRef;
  // contractForm:ContractForm =new ContractForm()
  uploadDocument: UploadDocument = new UploadDocument();
  contractForm:ContractForm = new ContractForm();
  docUrl: any;
  allContacts :any[] = [];
  constructor(private dragulaService: DragulaService,private routingService:RoutingService, private contractFormService: ContractFormService, public veriableService:VeriablesService, private api:ApisService , private header:HeaderService) {
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
  }
  getDocUrl() {
    this.docUrl = localStorage.getItem('url');
    console.log(this.docUrl);
  }
  receivemail(id: string): void {
    const existingIndex = this.contractForm.receivers.indexOf(id);

    if (existingIndex !== -1) {
      this.contractForm.receivers.splice(existingIndex, 1);
    } else {
      this.contractForm.receivers.push(id);
    }

    console.log('Selected Receivers:', this.contractForm.receivers);
  }
  sandContract(){
    this.api.sandContract(this.contractForm , this.header.headers).subscribe({
      next:((data)=>{
        console.log(data, this.contractForm);
        this.veriableService.contact = false
        this.routingService.goToDocument(this.header.headers)
      })
    })
  }
  
  toggle(value:any){
    console.log(value);
    

  }
  location(e:any){
      var textbox:any = document.getElementById('textbox');
    
      console.log(mouseX , mouseY);
      // Box position & sizes
      var boxX = textbox.offsetLeft;
      var boxY = textbox.offsetTop;
      var boxWidth = textbox.offsetWidth;
      var boxHeight = textbox.offsetHeight;
    
      // Mouse position comes from the 'mousemove' event
      var mouseX = e.pageX;
      var mouseY = e.pageY;
      if(mouseX>=boxX && mouseX<=boxX+boxWidth) {
        if(mouseY>=boxY && mouseY<=boxY+boxHeight){
           // Mouse is in the box
          //  return true;
          
        }
      }
    }
  
   
  
    ngAfterViewInit() {
      // Access the input field and get its position
      const inputElement = this.draggableInput.nativeElement;
      const inputPosition = inputElement.getBoundingClientRect();
  
      console.log('Input Position:', inputPosition);
    }
  
  getAllContact(){
    this.api.getAllContact(this.header.headers).subscribe({
      next:((data:any)=>{
        this.allContacts = data.Contacts;
    // console.log(this.allContacts);
    
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

