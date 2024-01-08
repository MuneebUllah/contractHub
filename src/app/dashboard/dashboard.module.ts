import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {dragDropModule} from '@angular/ckd';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document.component';
import { TempleteComponent } from './templete/templete.component';
import { ContactComponent } from './contact/contact.component';
import { SettingComponent } from './setting/setting.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { StepperViewComponent } from '../stepper-view/stepper-view.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { ViewDocComponent } from './view-doc/view-doc.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavBarComponent,
    DashboardComponent,
    DocumentComponent,
    TempleteComponent,
    ContactComponent,
    SettingComponent,
    AccountComponent,
    StepperViewComponent,
    ViewDocComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DragDropModule,
    FormsModule,
    NgxDocViewerModule
    // dragDropModule
  ]
})
export class DashboardModule { }
