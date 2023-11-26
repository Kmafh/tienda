import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HeaderComponent } from 'src/app/layout/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    public dialogRef: MatDialogRef<HeaderComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
