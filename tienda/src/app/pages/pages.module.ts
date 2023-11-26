import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './home/components/section/section.component';



@NgModule({
  declarations: [
    HomeComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SectionComponent
  ]
})
export class PagesModule { }
