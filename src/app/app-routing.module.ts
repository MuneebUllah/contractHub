import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'signup',
    component:SignInComponent
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
