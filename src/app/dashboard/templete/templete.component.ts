import { Component } from '@angular/core';

@Component({
  selector: 'app-templete',
  templateUrl: './templete.component.html',
  styleUrls: ['./templete.component.scss']
})
export class TempleteComponent {
  templete = [
    {
      name : 'Muneeb',
      email : 'muneebjutt0099@gmail.com',
      status : 'individual',
      with:'Ali',
      action : '../../../assets/delete.svg'
    },
    {
      name : 'Umar',
      email : 'Umar@gmail.com',
      status : 'individual',
      with:'Rizwan',
      action : '../../../assets/delete.svg'
    },
    {
      name : 'Ali',
      email : 'Ali@gmail.com',
      status : 'individual',
      with:'Umar',
      action : '../../../assets/delete.svg'
    },
    {
      name : 'Rizwan',
      email : 'Rizwan0099@gmail.com',
      status : 'individual',
      with:'Muneeb',
      action : '../../../assets/delete.svg'
    }
  ]
}
