import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeriablesService } from '../veriables.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApisService } from 'src/app/apis.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  name :string = 'Muneeb'
  sidebarOpen: boolean = false;
  token: any = ''
  
  body:any = {};

  ngOnInit(): void {
    
  }

  constructor(private router: Router , public veriableService: VeriablesService , private http : HttpClient , private api : ApisService) {}

  documentfun(){
    this.veriableService.document = true;
    this.veriableService.templete = false;
    this.veriableService.setting  = false;
    this.veriableService.contact  = false
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
  createAccount(){
   this.token =  localStorage.getItem('token');
   const headers = new HttpHeaders({
    'authorization': 'application/json',
    // Add any other headers as needed
  });
    this.body = {

    }
    this.http.post(this.api.base_url + 'api/user/createCompany' , {} , { headers: headers })
  }
  // supportfun(){
  //   this.veriableService.document = false;
  //   this.veriableService.templete = false;
  //   this.veriableService.setting  = true;
  //   this.veriableService.contact  = false;
  // }
  // logoutfun(){
  //   this.veriableService.document = false;
  //   this.veriableService.templete = false;
  //   this.veriableService.setting  = true;
  //   this.veriableService.contact  = false;
  // }
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      // You can perform further actions with the selected file here
      // For example, you can read its contents, upload it, etc.
    }
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
