import { Component, OnInit } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { ContactForm } from '../../../Shared/models/contactForm';
import { ApisService } from 'src/app/Services/apis.service';
import { HeaderService } from 'src/app/Services/header.service';
import { HttpHeaders } from '@angular/common/http';
import { VeriablesService } from 'src/app/Services/veriables.service';
import { ContractForm } from 'src/app/Shared/models/contractForm';
import { StorageService } from 'src/app/Services/storage.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent implements OnInit{
  companyContactForm:boolean = true;
  individualContactForm:boolean = false;
  individualForm : ContactForm = new ContactForm();
  companyForm : ContactForm = new ContactForm();
  contractForm:ContractForm = new ContractForm();
  allContacts :any[] = [];
  // contactForm:ContactForm = 
  ngOnInit(): void {
   this.getAllContact()
  //  console.log(this.allContacts);
   
  }
  constructor(private api:ApisService ,private storage:StorageService, private header:HeaderService , public veriableService:VeriablesService){

  }
  contact = [
    {
      name : 'Muneeb',
      email : 'muneebjutt0099@gmail.com',
      entityType : 'individual',
      action : '../../../assets/delete.svg'
    },
    {
      name : 'Umar',
      email : 'Umar@gmail.com',
      entityType : 'individual',
      action : '../../../assets/delete.svg'
    },
    {
      name : 'Ali',
      email : 'Ali@gmail.co',
      entityType : 'individual',
      action : '../../../assets/delete.svg'
    },
    {
      name : 'Rizwan',
      email : 'Rizwan0099@gmail.com',
      entityType : 'individual',
      action : '../../../assets/delete.svg'
    }
  ]

  getAllContact(){
    this.api.getAllContact(this.header.headers).subscribe({
      next:((data:any)=>{
        this.allContacts = data.Contacts;
      console.log(this.allContacts);
      
      }       
      
      )
    })
  }

  receivemail(id:any){
    this.contractForm.receivers = id
    console.log(id)
  }
  companyFormSubmittedFun(){
    const body = {
      name:'Muneeb',
      email:'muneebjutt+rfv0099@gmail.com'
    }
    this.api.createContact(this.header.headers , this.companyForm ).subscribe({
      
      next:((data:any)=>{
        console.log(data)
        this.veriableService.addContactForm = false
        this.veriableService.contact = true;
        this.getAllContact()
        // setTimeout
      
        // console
      })
    })
  }

  individualFormSubmittedFun(){
    console.log( this.individualForm.name);
  }
  companyButtonFun(){
    this.companyContactForm= true;
    this.individualContactForm = false;
  }
  individualButtonFun(){
    this.companyContactForm= false;
    this.individualContactForm = true;
  }
  deleteRow(id:any){  
    this.api.deleteContact(this.header.headers , id).subscribe({
      next:((data:any)=>{
        console.log(data)
        this.getAllContact();
      }
      )
    })
}
}

