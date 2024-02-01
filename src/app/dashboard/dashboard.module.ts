import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {dragDropModule} from '@angular/ckd';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocumentComponent } from './components/document/document.component';
import { TempleteComponent } from './components/templete/templete.component';
import { ContactComponent } from './components/contact/contact.component';
import { SettingComponent } from './components/setting/setting.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AccountComponent } from './components/account/account.component';
import { FormsModule } from '@angular/forms';
import { StepperViewComponent } from '../components/stepper-view/stepper-view.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { ViewDocComponent } from './components/view-doc/view-doc.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentEditorModule } from '@syncfusion/ej2-angular-documenteditor';
import { CanvasComponent } from './components/canvas/canvas.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


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
    ViewDocComponent,
    CanvasComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DragDropModule,
    FormsModule,
    NgxDocViewerModule,
    NgxExtendedPdfViewerModule,
    BrowserModule,
    BrowserAnimationsModule,
    DocumentEditorModule,
    // dragDropModule
  ]
})
export class DashboardModule { }
