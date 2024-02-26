import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork } from 'src/app/models/artwork';
import { BaseService } from 'src/app/services/base/base.service';
import { environment } from 'src/enviroments/environment';
import { category } from '../../../constans/constans';
import { User } from 'src/app/models/user';
const endpoint: any = environment.base_url;

@Component({
  selector: 'app-artwork-update',
  templateUrl: './artwork-update.component.html',
  styleUrls: ['./artwork-update.component.css']
})
export class ArtworkUpdateComponent implements OnInit{
  id:any
  artwork!:Artwork
  url:string
  urlArt:string
  category = category
  artista!:User
  constructor(private route: ActivatedRoute,
    private baseService:BaseService) { 
      this.url = `${endpoint}/upload/artwork/`
      this.urlArt = `${endpoint}/upload/usuario/`
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
        console.log('ID:', this.id); // O haz cualquier otra cosa que necesites con el ID
      });
      this.getArtwork()
      
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('ID:', this.id); // O haz cualquier otra cosa que necesites con el ID
    });
  }
  getArtwork() {
    const url:string = `${endpoint}/artwork/art/${this.id}`
    
    this.baseService.getItemsById(url).subscribe((item:any) => {
      this.artwork = item.artwork as Artwork
      this.getArtish()
    })
  }
  getCategoryLabel(categoryCode: string): string {
    const selectedCategory = category.find(cat => cat.code === categoryCode);
    return selectedCategory ? selectedCategory.label : 'Desconocido';
  }

  getArtish() {
    const url:string = `${endpoint}/usuarios/us/${this.artwork.uid}`
    this.baseService.getItemsById(url).subscribe((item:any) => {
      this.artista = item.user[0] as User
    })
  }
}
