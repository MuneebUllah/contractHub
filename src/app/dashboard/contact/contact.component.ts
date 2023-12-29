import { Component, OnInit } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { ContactForm } from './contactForm';
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

  ngOnInit(): void {
    
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
      email : 'Ali@gmail.com',
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

  companyFormSubmittedFun(){
    console.log( this.companyForm.companyName);
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
}

