import Swal from "sweetalert2";

export class Utils {
    
    static toas(text:string,resp?:any) {
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
        if(resp.usuario) {
          text = `${resp.usuario.name} bienvenido`
        }
        Toast.fire({
          icon: 'success',
          title: text
        });
      }
  }