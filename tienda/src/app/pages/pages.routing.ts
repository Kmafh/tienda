import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [

  { path: 'index',
  component: HomeComponent,
 children:[
   { path: '', component: HomeComponent, data:{title:"Inicio"}},
 ]},
 { path: 'admin',
 component: AdminComponent,
children:[
  { path: '', component: AdminComponent, data:{title:"Administrador"}},
]},
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class PagesRoutingModule { }
