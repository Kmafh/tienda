import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent,data:{title:'Dashboard'} },
      

    ],
  },
  { path: '', redirectTo: "/dashboard", pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
