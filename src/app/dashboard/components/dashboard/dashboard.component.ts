import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VeriablesService } from '../../../Services/veriables.service';
// import {ngx-doc-viewer} from ''
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, public veriableService: VeriablesService) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.selectedSection = params.get('section');
    // });
  }
}
