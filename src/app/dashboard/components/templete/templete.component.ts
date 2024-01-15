import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/Services/apis.service';
import { HeaderService } from 'src/app/Services/header.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-templete',
  templateUrl: './templete.component.html',
  styleUrls: ['./templete.component.scss']
})
export class TempleteComponent implements OnInit{
  templete:any[] =[] 
ngOnInit(): void {
  this.getAllTemplete();
  // console.log(this.token);
  
}
constructor (private api:ApisService , private storage:StorageService, private header:HeaderService){}
getAllTemplete() {
  this.api.getTemplete(this.header.headers).subscribe({
    next: (data: any) => {
      console.log(data);
    },
    error: (error: any) => {
      console.log(error);
    }
  });
}
  templete1 = [
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
