import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios/usuarios.service';
import { LoginComponent } from '../login/login.component';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { ModalCondComponent } from './modal-cond/modal-cond.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  preload: boolean = false;
  error: boolean = false;

  form = this.fb.group({
    email: [
      localStorage.getItem('email') || '',
      [Validators.required, Validators.email],
    ],
    password: ['', [Validators.required]],
    name: ['', [Validators.required]],
    remember: [false, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UsuarioService,
    private router: Router,
    private utilsService: UtilsService,
    public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog
  ) {}

  async register() {
    this.preload = true;

    if (this.form.invalid) {
      this.error = true;
      this.preload = false;

    } else {
      this.error = false;
      try {
        let value = this.form.value;
        await this.utilsService.setUsuario(value);
        this.userService.login(value).subscribe((resp) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: 'success',
            title: `Bienvenido ${value.name}.`,
          }),
            this.onNoClick();
          this.preload = false;

        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  async setUsuario(user: any) {
    user.active = true;
    user.img = 'perfil.png';
    this.userService.createUser(user).subscribe(
      (respF: any) => {
        console.table(respF);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  openDialogLogin(): void {
    this.onNoClick();
    
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openDialogModal(): void {
    const dialogRef = this.dialog.open(ModalCondComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
