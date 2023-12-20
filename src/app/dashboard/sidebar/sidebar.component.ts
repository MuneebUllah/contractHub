import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeriablesService } from '../veriables.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(private router: Router , public veriableService: VeriablesService) {}

  documentfun(){
    this.veriableService.document = true;
    this.veriableService.templete = false;
    this.veriableService.setting  = false;
    this.veriableService.contact  = false;
    // this.router.navigate(['dashboard/document']);
  }
  templetefun(){
    this.veriableService.document = false;
    this.veriableService.templete = true;
    this.veriableService.setting  = false;
    this.veriableService.contact  = false;
    // this.router.navigate(['dashboard/templete']);
  }
  contactfun(){
    this.veriableService.document = false;
    this.veriableService.templete = false;
    this.veriableService.setting  = false;
    this.veriableService.contact  = true;
    // this.router.navigate(['dashboard/contact']);
  }
  settingfun(){
    this.veriableService.document = false;
    this.veriableService.templete = false;
    this.veriableService.setting  = true;
    this.veriableService.contact  = false;
    // this.router.navigate(['dashboard/setting']);
  }
  accountfun(){
    this.veriableService.document = false;
    this.veriableService.templete = false;
    this.veriableService.setting  = false;
    this.veriableService.contact  = false;
    this.veriableService.account = true
    // this.router.navigate(['dashboard/setting']);
  }
  // supportfun(){
  //   this.veriableService.document = false;
  //   this.veriableService.templete = false;
  //   this.veriableService.setting  = true;
  //   this.veriableService.contact  = false;
  //   // this.router.navigate(['dashboard/setting']);
  // }
  // logoutfun(){
  //   this.veriableService.document = false;
  //   this.veriableService.templete = false;
  //   this.veriableService.setting  = true;
  //   this.veriableService.contact  = false;
  //   // this.router.navigate(['dashboard/setting']);
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

}
