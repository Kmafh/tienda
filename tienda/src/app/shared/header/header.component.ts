import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, HostListener  } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DialogComponent, DialogData } from 'src/app/components/dialog/dialog.component';
import { Forms } from 'src/app/interfaces/form.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('focusWidth', [
      state('unfocused', style({
        width: '200px', // Ancho inicial
      })),
      state('focused', style({
        width: '600px', // Ancho máximo al estar enfocado
      })),
      transition('unfocused <=> focused', animate('0.8s ease')),
    ])]
})

export class HeaderComponent {
  @HostBinding('class.hidden') isSmallScreen = false;
  constructor(public dialog: MatDialog) {
     // Detecta el tamaño de la pantalla al inicializar el componente
     this.isSmallScreen = window.innerWidth < 768; // Ajusta este valor según lo que consideres "pantalla pequeña"
  
  }
  // Método para actualizar la variable isSmallScreen cuando cambia el tamaño de la pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.isSmallScreen = window.innerWidth < 768; // Ajusta este valor según lo que consideres "pantalla pequeña"
  }
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

  focusState: string = 'unfocused';

  onFocus() {
    this.focusState = 'focused';
  }

  onBlur() {
    this.focusState = 'unfocused';
  }
}
