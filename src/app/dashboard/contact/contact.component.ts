import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent {

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
}

