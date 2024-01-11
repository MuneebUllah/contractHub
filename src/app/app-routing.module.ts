import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { DocumentComponent } from './dashboard/components/document/document.component';
import { TempleteComponent } from './dashboard/components/templete/templete.component';
import { ContactComponent } from './dashboard/components/contact/contact.component';
import { SettingComponent } from './dashboard/components/setting/setting.component';
import { AccountComponent } from './dashboard/components/account/account.component';
import { StepperViewComponent } from './components/stepper-view/stepper-view.component';
import { AccountCreatedComponent } from './components/account-created/account-created.component';
import { AuthGuard } from './Shared/auth/auth.guard';
import { ResetComponent } from './components/reset/reset.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ViewDocComponent } from './dashboard/components/view-doc/view-doc.component';
import { CanvasComponent } from './dashboard/components/canvas/canvas.component';

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
      {
        path:'convas',
        component:CanvasComponent
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

