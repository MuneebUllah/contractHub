import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { StepperViewComponent } from './stepper-view/stepper-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AccountCreatedComponent } from './account-created/account-created.component';
import { ResetComponent } from './reset/reset.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AccountCreatedComponent,
    ResetComponent,
    ChangePasswordComponent,
    SignUpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxDocViewerModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    // DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
