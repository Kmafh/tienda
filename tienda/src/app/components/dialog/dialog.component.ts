import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Forms } from 'src/app/interfaces/form.interface';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { Utils } from 'src/app/utils/utils';
export interface DialogData {
  type: string;
  group:any
  data: any;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  typeData:any
  dynamicForm!: FormGroup;
  formFields: any[] = [];
  typeForm: string = 'Login';
  title:string;
  constructor(
    public dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public userService: UserService
  ) {
    this.typeForm = data.type
    this.title = data.type
  }
  // Puedes cambiar el valor según tus necesidades


  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    if (this.typeForm === 'Login') {
      this.formFields = Forms.LoginGroup
    } else if (this.typeForm === 'Registro') {
      this.formFields = Forms.registerGroup
    }

    // Crear un FormGroup dinámico
    const formGroupConfig: any = {};
    this.formFields.forEach((field) => {
      formGroupConfig[field.name] = ['', Validators.required];
    });

    this.dynamicForm = this.fb.group(formGroupConfig);
  }

  submitForm() {
    // Lógica para manejar el envío del formulario
    const user:User = this.dynamicForm.value
    if(this.typeForm && this.typeForm === 'Login') {
      console.log(this.dynamicForm.value);
      this.login(user);
      this.onNoClick()
    } else if(this.typeForm && this.typeForm === 'Registro') {
      console.log(this.dynamicForm.value);
      
      this.userService.createUser(user).subscribe(
        (respF: any) => {
          console.table(respF);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    
  }
  validateData(data?:DialogData) {
    if(this.typeData === 'LoginData') {

    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  openDialog(type:string, row?:any): void {
    this.onNoClick()
    const data:DialogData = {
      type: type,
      group:Forms.LoginGroup,
      data: row || null
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      data: data || null,
    });
  }
  
  login(user:any) {
    this.userService.login(user).subscribe(
      (resp: any) => {
        Utils.toas('logi',resp)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
}
