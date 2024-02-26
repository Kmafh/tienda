import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { category } from 'src/app/constans/constans';
import { Artwork } from 'src/app/models/artwork';
import { User } from 'src/app/models/user';
import { BaseService } from 'src/app/services/base/base.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UserService } from 'src/app/services/user.service';
import { Utils } from 'src/app/utils/utils';
import { environment } from 'src/enviroments/environment';
import Swal from 'sweetalert2';
const endpoint: any = environment.base_url;
const urlApi:string = `${endpoint}/artwork`

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent {
  archivo: File | null = null;
  formInvalid:boolean =false;
  cantegory = category
  user:User;
  obra!:Artwork
  artworkGroup = this._formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: [null, Validators.required],
    category: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  public imagenSubir!: File;
  public imgTemp: any = null;
  item:any
  constructor(private _formBuilder: FormBuilder,
    private userService: UserService,
    private baseService: BaseService,
    private fileUploadService: FileUploadService,

    private spinner: NgxSpinnerService) {
      this.user = userService.user
    }

  onFileSelected(event: any): void {
    const input = event.target;
    if (input.files && input.files[0]) {
      this.archivo = input.files[0];
      this.imagenSubir = input.files;
    } else {
      this.archivo = null;
    }
  }

  mostrarSpinner() {
    this.spinner.show();
    
    // Simula una tarea asincrónica
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  onCreate() {
    if(this.artworkGroup.invalid) {
      this.formInvalid =true
      return
    } else {
      this.formInvalid = false
      const value:any = this.artworkGroup.value
      this.obra=  value as Artwork
      this.obra.likes = 0;
      this.obra.createAt = new Date();
      this.obra.active = true;
      this.obra.uid = this.user.uid ;
      this.obra.uName = this.user.name ;
      this.obra.img = "" ;
    this.baseService.postItem(urlApi,this.obra).subscribe((resp:any) => {
      console.log("OK, aladido")
      Utils.toas('Nueva obra',resp)
      this.item = resp.artwork
    })
    }
    
  }

  cambiarImagen(file: File) {
    this.imagenSubir = file;
    if (!file) {
      this.imgTemp = null;
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.imgTemp = reader.result;
    };
  }
  
  subirImagen(tipo: any) {
    let art: Artwork;
    let user: User;
    let item: any;
    
    this.fileUploadService
          .actualizarFoto(this.imagenSubir, tipo, this.item.id)
          .then((img: any) => {
            let urlId = `${urlApi}/${this.item.id}`
            this.obra.img = img
            this.baseService.putItem(urlId,this.obra).subscribe((resp:any) => {
              console.log("OK, aladido")
              Utils.toas('Nueva obra',resp)
              this.item = resp.artwork
            })
          })
          .catch((err: any) => {
            console.log(err);
            Swal.fire('Error', 'No se pudo subir la imagen', 'error');
          });
  }
  
}
