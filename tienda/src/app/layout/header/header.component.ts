import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { UtilsService } from '../../services/utils/utils.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuarios/usuarios.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/environment.prod';
import { Subscription } from 'rxjs';
const endpoint: any = environment.base_url;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public imgUrl = '';
  public user!: Usuario;
  public cont: any = 0;
  public userAdmin:boolean = false;

  private userSubscription: Subscription;

  constructor(
    private userService: UsuarioService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.imgUrl = endpoint + "/upload/usuarios/" + userService.user?.img;
    this.user = userService.user;

    // Suscribirse a cambios en el usuario
    this.userSubscription = userService.userChange.subscribe(newUser => {
      this.imgUrl = endpoint + "/upload/usuarios/" + newUser?.img;
      this.user = newUser;
      if(this.user.role === 'ADMIN_ROLE'){
        this.userAdmin = true
      }
    });

    if(this.user?.role === 'ADMIN_ROLE'){
      this.userAdmin = true
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  logout() {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Siempre serás bienvenido',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#04b381',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, hasta otra!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.logout();
        this.router.navigate(['']);
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
          title: `Que pase buen día.`,
        });
      }
    });
  }
  ruterNavigate(link:any){
    this.router.navigate([link])
  }
  buscar(termino: string) {
    if (termino.length === 0) {
      return;
    }
    this.router.navigateByUrl(`/dashboard/buscar/${termino}`);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
