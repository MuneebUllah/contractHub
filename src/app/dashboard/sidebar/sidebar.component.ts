import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeriablesService } from '../../veriables.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApisService } from 'src/app/apis.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { sidebarService } from './sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // name : Array = ['Muneeb']
  sidebarOpen: boolean = false;
  token: any = localStorage.getItem('token')
   headers = new HttpHeaders({
    'Authorization': 'Bearer ' + this.token,
  });
  body:any = {};

  ngOnInit(): void {
    
  }

  constructor(private router: Router , public veriableService: VeriablesService , private http : HttpClient , private api : ApisService , public sidebarServices:sidebarService) {}

  documentfun(){
    this.veriableService.document = true;
    this.veriableService.templete = false;
    this.veriableService.setting  = false;
    this.veriableService.contact  = false;
    const token = localStorage.getItem('token')
    
this.http.get(this.api.base_url + 'api/user/getAllDocuments', { headers: this.headers })
  .subscribe((data: any) => {
    console.log(data);
  });
      console.log(token)
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
    // console.log("function Called")

    // this.body = {
    // }
    // this.http.post(this.api.base_url + 'api/user/createCompany' , {} , { headers: this.headers })
  }
  // getCompanies(): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'authorization': `${localStorage.getItem('token')}`
  //   });
  //   // console.log("function Called")

  //    return this.http.get(this.api.base_url + 'api/user/getUserCompanies', { headers }).pipe(
  //     map((response: any) => {
  //       console.log(response);
  //       // return response;
  //     })
  //   );
  // }
getCompaniesFun(){
  this.sidebarServices.getCompanies().subscribe((data) => {
    // Process the response data here
    console.log( this.veriableService.companyName.push( data.Companies));
  });
}
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

  logout(){
    localStorage.clear();
  }

}
