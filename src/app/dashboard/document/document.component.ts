import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  createFolder:boolean = false;
  folders:any[] = []
  documents:any[] = []
  
  createFolderfun(){
    this.createFolder = true
  }
  constructor(private api: ApisService , private header:HeaderService){}

  ngOnInit(): void {
    this.getFolders();
    this.getDocument();
  }
  getFolders(){
    // const headers = new HttpHeaders({
    //   'authorization': `${localStorage.getItem('token')}`
    // })
    // debugger
    this.api.getFolders( this.header.headers).subscribe({
      next:((data:any)=>{
        this.folders = data.Folders
        // for(let i =  0 ; i < data.Folders.length ; i++ ){
        // }
        // console.log(data.error)
        // console.log(data);
      }
      )
    });
  }
  openDocument(id : any){
    console.log(id)

  }
  getDocument(){
  //  const token = localStorage.getItem('token')
  //   const headers = new HttpHeaders({
  //     'authorization': `${token}`
  //   })
  //   // debugger
  //   console.log("FunctionCallled" )
    this.api.getDocument(this.header.headers).subscribe({
      next:((data:any)=>{
        this.documents = data.Documents
        console.log(data)
      }
      )
    });
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
    const headers=new HttpHeaders({
      'authorization':`Bearer ${localStorage.getItem('token')}`
    })
    // console.log("function call")
      this.document.splice(id, 1)
      this.api.deleteDocument(headers , id).subscribe({
        next:((data:any)=>{
          console.log(data)
        }
        )
      })
  }
}
