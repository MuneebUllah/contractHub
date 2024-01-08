import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeriablesService } from '../../veriables.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApisService } from 'src/app/apis.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { sidebarService } from './sidebar.service';
import { Signup } from 'src/app/Shared/models/signup.model';
import { StorageService } from 'src/app/Services/storage.service';
import { HeaderService } from 'src/app/Services/header.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user:Signup = new Signup();
  sidebarOpen: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowWidth();
  }
  constructor(private router: Router ,private storageService:StorageService,private header:HeaderService, public veriableService: VeriablesService , private http : HttpClient , private api : ApisService , public sidebarServices:sidebarService) {}
  token: any = this.storageService.getToken()

  //  headers = new HttpHeaders({
  //   'authorization': this.token,
  // });
  body:any = {};

  ngOnInit(): void {
    this.checkWindowWidth();
    this.getCompaniesFun();
    this.documentfun()
    // console.log(this.user);
  }


  documentfun(){
    this.veriableService.document = true;
    this.veriableService.templete = false;
    this.veriableService.setting  = false;
    this.veriableService.contact  = false;
//     const token = localStorage.getItem('token')   
//     console.log(this.headers);
// this.http.get(this.api.base_url + '/user/getAllDocuments',  {headers:this.headers} )
//   .subscribe((data: any) => {
//     // console.log(data);
//   });
      // console.log(token)
  }
  templetefun(){
    this.veriableService.document = false;
    this.veriableService.templete = true;
    this.veriableService.setting  = false;
    this.veriableService.contact  = false;
  }
  contactfun(){
    this.veriableService.document = false;
    this.veriableService.templete = false;
    this.veriableService.setting  = false;
    this.veriableService.contact  = true;
  }
  settingfun(){
    this.veriableService.document = false;
    this.veriableService.templete = false;
    this.veriableService.setting  = true;
    this.veriableService.contact  = false;
  }
  accountfun(){
    this.veriableService.document = false;
    this.veriableService.templete = false;
    this.veriableService.setting  = false;
    this.veriableService.contact  = false;
    this.veriableService.account = true
  }
  createAccount(event:Event){
    event.preventDefault();
    this.veriableService.corporateForm = false 
    this.veriableService.companyInfo = true 
    this.veriableService.companyState = false 
    this.veriableService.timeZone = false 
    this.veriableService.address = false 
    const token = localStorage.getItem('token')
    this.router.navigate(['/new-account']);
 }

  private checkWindowWidth(): void {
    // Get the current window width
    const windowWidth = window.innerWidth;

    // Set sidebarOpen based on the window width
    this.sidebarOpen = windowWidth > 1200;
  }


getCompaniesFun(){
  // const headers = new HttpHeaders({
  //   'authorization':'Bearer'+ localStorage.getItem('token')
  // })
  this.api.getCompanies(this.header.headers).subscribe((data:any) => {
    // console.log( this.veriableService.companyName = data.Companies);
  });
}
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;

    if (files && files.length > 0) {
      const selectedFile: File = files[0];
      const fileName: string = selectedFile.name;
      const fileUrl: string = URL.createObjectURL(selectedFile);
      const body:any = {
        Document: selectedFile,

      }
      const token = localStorage.getItem('token')
      const headers = new HttpHeaders({
        'authorization' : this.token
      })
      console.log(body);
      
      this.api.sentFile(body,headers).subscribe((data:any)=>{
        next:(
          console.log(data)


        )
      })

    }
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout(){
    localStorage.clear();
  }

}
