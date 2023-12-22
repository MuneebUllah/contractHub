import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DocumentComponent } from './dashboard/document/document.component';
import { TempleteComponent } from './dashboard/templete/templete.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { AccountComponent } from './dashboard/account/account.component';
import { StepperViewComponent } from './stepper-view/stepper-view.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'signup',
    component:SignInComponent
  },
  {
    path:'new-account',
    component:StepperViewComponent
  },
  {
    path:'login',
    component:SignInComponent
  },
  {
    path:'reset',
    component:SignInComponent
  },
  {
    path:'dashboard',
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
    ]
  },
  {
    path:'dashboard/:section',
    component:DashboardComponent
  },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
