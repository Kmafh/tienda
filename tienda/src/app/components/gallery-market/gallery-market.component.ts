import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-market',
  templateUrl: './gallery-market.component.html',
  styleUrls: ['./gallery-market.component.css']
})
export class GalleryMarketComponent {

  constructor( private router: Router){

  }

  navigation(url:string){
    this.router.navigate([url])

  }
}
