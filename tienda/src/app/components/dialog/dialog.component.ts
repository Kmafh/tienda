import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Forms } from 'src/app/interfaces/form.interface';
import { HeaderComponent } from 'src/app/shared/header/header.component';
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
  typeForm: string = 'login';
  title:string;
  constructor(
    public dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
  ) {
    this.typeForm = data.type
    this.title = data.type
  }
  // Puedes cambiar el valor según tus necesidades


  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    if (this.typeForm === 'register') {
      this.formFields = Forms.registerGroup
    } else if (this.typeForm === 'login') {
      this.formFields = Forms.loginGroup
    } else if (this.typeForm === 'artworkra') {
      this.formFields = Forms.artworkraGroup
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
    console.log(this.dynamicForm.value);
  }
  validateData(data?:DialogData) {
    if(this.typeData === 'loginData') {

    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
