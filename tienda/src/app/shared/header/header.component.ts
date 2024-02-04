import { Component } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DialogComponent, DialogData } from 'src/app/components/dialog/dialog.component';
import { Forms } from 'src/app/interfaces/form.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  
  constructor(public dialog: MatDialog) {}
  get token(): string {
    return sessionStorage.getItem('token') || '';
  }
  openDialog(type:string, row?:any): void {
    const data:DialogData = {
      type: type,
      group:Forms.loginGroup,
      data: row || null
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      data: data || null,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
