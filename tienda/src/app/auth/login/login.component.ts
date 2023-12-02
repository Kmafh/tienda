import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { RegisterComponent } from '../register/register.component';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuarios/usuarios.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  preload:boolean = false
  error:boolean = false

  form = this.fb.group({
    email:[localStorage.getItem('email') || '',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    remember:[false,[Validators.required]],
  })

  constructor(private fb: FormBuilder, private userService: UsuarioService, private router: Router, private utilsService: UtilsService,
    public dialogRef: MatDialogRef<HeaderComponent>,
    public dialog: MatDialog
    ) {

  }
  // ngAfterViewInit(): void {
  //   this.googleInit();
  // }


  onNoClick(): void {
    this.dialogRef.close();
  }

  // googleInit(){
  //   google.accounts.id.initialize({
  //     client_id: "707524561386-47strpsnldt5agagki784ln2g776pi9v.apps.googleusercontent.com",
  //     callback: (response:any) => this.handleCredentialResponse(response)
  //   });
  //   google.accounts.id.renderButton(
  //     document.getElementById("buttonDiv"),
  //     { theme: "outline", size: "large" }  // customization attributes
  //   );
  // }

  handleCredentialResponse( response:any){
    this.userService.loginGoogle(response.credential).subscribe((resp) =>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: `Bienvenido ${this.form.value.email}.`
      }),
      this.router.navigate(['/preload'])

    },(err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error.msg,
      })
    
    })
  }

  login() {
    if(this.form.invalid) {
      this.error = true
    } else {
      this.error = false
      this.preload = true;
    this.userService.login(this.form.value)
    .subscribe( resp => {
      this.userService.user = resp.usuario
      const remember = this.form.get('remember')!.value;
      const email = this.form.get('email')!.value
      if(remember){
        localStorage.setItem('email', email?.toString()!)
      } else {
        localStorage.removeItem('email')

      }
    this.preload = false;
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: `Bienvenido ${this.form.value.email}.`
      }),
      this.router.navigate(['/index'])

      this.onNoClick()

    },(error) => {
    this.preload = false;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.msg,
      })
    })
    }
    
  }

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(RegisterComponent);
    this.onNoClick()
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }  
}
