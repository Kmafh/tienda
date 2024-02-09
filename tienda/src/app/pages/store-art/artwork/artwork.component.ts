import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Artwork } from 'src/app/models/artwork';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent {
  archivo: File | null = null;
  formInvalid:boolean =false
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

  constructor(private _formBuilder: FormBuilder,
    
    private spinner: NgxSpinnerService) {}

  onFileSelected(event: any): void {
    const input = event.target;
    if (input.files && input.files[0]) {
      this.archivo = input.files[0];
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
      let obra:Artwork =  value as Artwork
      obra.likes = 0,
    // public price: number,
    // public createAt: Date = new Date(),
    // public active: boolean = true,
    // public uid: string,
    // public uName: string,
    // public description: string,
    // public img: string,
    // public provincia: string,
    // public amount: number
      console.table(obra)
    }
    
  }
}
