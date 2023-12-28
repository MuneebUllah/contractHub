import { Component } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
  createFolder:boolean = false;

  createFolderfun(){
    this.createFolder = true
  }

document = [
    {
      id:0,
      name : 'Muneeb',
      email : 'muneebjutt0099@gmail.com',
      status : 'individual',
      with:'Ali',
      action : '../../../assets/delete.svg'
    },
    {
      id:1,
      name : 'Umar',
      email : 'Umar@gmail.com',
      status : 'individual',
      with:'Rizwan',
      action : '../../../assets/delete.svg'
    },
    {
      id:2,
      name : 'Ali',
      email : 'Ali@gmail.com',
      status : 'individual',
      with:'Umar',
      action : '../../../assets/delete.svg'
    },
    {
      id:3,
      name : 'Rizwan',
      email : 'Rizwan0099@gmail.com',
      status : 'individual',
      with:'Muneeb',
      action : '../../../assets/delete.svg'
    }
  ]

  deleteRow(id:any){  
      this.document.splice(id, 1)
  }
}
