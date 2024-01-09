import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeriablesService } from '../../../Services/veriables.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApisService } from 'src/app/Services/apis.service';
import { Signup } from 'src/app/Shared/models/signup.model';
import { StorageService } from 'src/app/Services/storage.service';
import { HeaderService } from 'src/app/Services/header.service';
import { RoutingService } from 'src/app/Services/routing.service';
import { UploadDocument } from './uploadDocument';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user: Signup = new Signup();
  uploadDocument: UploadDocument = new UploadDocument();
  sidebarOpen: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowWidth();
  }
  constructor(private router: Router, private routingService: RoutingService, private storageService: StorageService, private header: HeaderService, public veriableService: VeriablesService, private http: HttpClient, private api: ApisService) { }
  token: any = this.storageService.getToken()

  ngOnInit(): void {
    this.checkWindowWidth();
    this.getCompaniesFun();
    this.documentfun()
  }


  documentfun() {
    this.veriableService.document = true;
    this.veriableService.templete = false;
    this.veriableService.setting = false;
    this.veriableService.contact = false;
    this.veriableService.account = false;
    this.routingService.goToDocument(this.token);
  }
  templetefun() {
    this.veriableService.document = false;
    this.veriableService.templete = true;
    this.veriableService.setting = false;
    this.veriableService.contact = false;
    this.veriableService.account = false;
    this.routingService.goToTemplete(this.token);

  }
  contactfun() {
    this.veriableService.document = false;
    this.veriableService.templete = false;
    this.veriableService.setting = false;
    this.veriableService.contact = true;
    this.veriableService.account = false
    this.routingService.goToContact(this.token);
  }
  settingfun() {
    this.veriableService.document = false;
    this.veriableService.templete = false;
    this.veriableService.setting = true;
    this.veriableService.contact = false;
    this.veriableService.account = false
    this.routingService.goToSetting(this.token);
  }
  accountfun() {
    this.veriableService.document = false;
    this.veriableService.templete = false;
    this.veriableService.setting = false;
    this.veriableService.contact = false;
    this.veriableService.account = true
    this.routingService.goToAccount(this.token);
  }
  createAccount(event: Event) {
    event.preventDefault();
    this.veriableService.corporateForm = false
    this.veriableService.companyInfo = true
    this.veriableService.companyState = false
    this.veriableService.timeZone = false
    this.veriableService.address = false
    this.routingService.goToCreateAccount(this.token);
  }

  private checkWindowWidth(): void {
    const windowWidth = window.innerWidth;
    this.sidebarOpen = windowWidth > 1200;
  }


  getCompaniesFun() {
    this.api.getCompanies(this.header.headers).subscribe((data: any) => {
      this.veriableService.companyName = data.Companies
     console.log( this.veriableService.userName = data.User)
    });
  }

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;

    if (files && files.length > 0) {
      const selectedFile: File = files[0];
      const fileName: string = selectedFile.name;
      const formData = new FormData();
      formData.append('Document', selectedFile);
      this.uploadDocument.docName = fileName;

      const body: any = {
        Document: selectedFile,
      }
      console.log(body);

      this.api.sentFile(formData, this.header.headers).subscribe((data: any) => {
        next: (
          this.uploadDocument.docURL = data.url,
          this.createDocument()
        )
      })

    }
  }
  createDocument(){
    this.api.createDocument(this.uploadDocument , this.header.headers).subscribe({
      next:((data)=>
      console.log(data)
      )
    })
    console.log(this.uploadDocument);
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    localStorage.clear();
  }
}
