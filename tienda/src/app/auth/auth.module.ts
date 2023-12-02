import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalCondComponent } from './register/modal-cond/modal-cond.component';
import { DemoMaterialModule } from '../demo-material-module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ModalCondComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ]
})
export class AuthModule { }
