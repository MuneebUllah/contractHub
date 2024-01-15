import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VeriablesService } from '../../../Services/veriables.service';
import { ApisService } from 'src/app/Services/apis.service';
import { HeaderService } from 'src/app/Services/header.service';
// import {ngx-doc-viewer} from ''
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, public veriableService: VeriablesService ,private header:HeaderService, private api: ApisService) {}
searchInput:string = ''
  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.selectedSection = params.get('section');
    // });
  }

  searchDocument(){
    console.log(this.searchInput)
    const body = {
      'query': this.searchInput
    }
    this.api.searchDocument(body , this.header.headers).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
