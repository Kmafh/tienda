import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './home/components/section/section.component';
import { DemoMaterialModule } from '../demo-material-module';
import { MenuComponent } from './home/components/menu/menu.component';
import { ResultComponent } from './home/components/result/result.component';
import { AdminComponent } from './admin/admin.component';
import { MenuAdminComponent } from './admin/components/menu-admin/menu-admin.component';
import { ResultAdminComponent } from './admin/components/result-admin/result-admin.component';
import { TableAdminComponent } from './admin/components/table-admin/table-admin.component';



@NgModule({
  declarations: [
    HomeComponent,
    SectionComponent,
    MenuComponent,
    ResultComponent,
    AdminComponent,
    MenuAdminComponent,
    ResultAdminComponent,
    TableAdminComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
  ],
  exports: [
    SectionComponent
  ]
})
export class PagesModule { }
