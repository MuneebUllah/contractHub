import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DocumentComponent } from './dashboard/document/document.component';
import { TempleteComponent } from './dashboard/templete/templete.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { AccountComponent } from './dashboard/account/account.component';
import { StepperViewComponent } from './stepper-view/stepper-view.component';
import { AccountCreatedComponent } from './account-created/account-created.component';
import { AuthGuard } from './auth/auth.guard';
import { ResetComponent } from './reset/reset.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewDocComponent } from './dashboard/view-doc/view-doc.component';

const routes: Routes = [
  {
    path:'signup',
    component:SignUpComponent
  },
  
  {
    path:'verify/:id',
    component:AccountCreatedComponent
  },
  {
    path:'login',
    component:SignInComponent
  },
  {
    path:'reset',
    component:ResetComponent
  },
  {
    path:'change-password',
    component:ChangePasswordComponent
  },
  {
    path:'new-account',
    component:StepperViewComponent
  },
  {
    path:'dashboard/:id',
    canActivate: [AuthGuard],
    component:DashboardComponent,
    children:[
      {
        path:'document',
        component:DocumentComponent
      },
      {
        path:'templete',
        component:TempleteComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'setting',
        component:SettingComponent
      },
      {
        path:'account',
        component:AccountComponent
      },
      {
        path:'view-doc',
        component:ViewDocComponent
      },
    ]
  },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    // provideRouter(routes , )
  ]
})
export class AppRoutingModule { }

