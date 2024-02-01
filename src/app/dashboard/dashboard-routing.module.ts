import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocumentComponent } from './components/document/document.component';
import { TempleteComponent } from './components/templete/templete.component';
import { ContactComponent } from './components/contact/contact.component';
import { SettingComponent } from './components/setting/setting.component';
import { AccountComponent } from './components/account/account.component';
import { ViewDocComponent } from './components/view-doc/view-doc.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { AuthGuard } from '../Shared/auth/auth.guard';

const routes: Routes = [
  {
  path: 'dashboard',
  canActivate: [AuthGuard],
  component: DashboardComponent,
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
  ],
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
