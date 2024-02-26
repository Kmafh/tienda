import { Component } from '@angular/core';
import { provincias } from 'src/app/constans/constans';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/enviroments/environment';
const endpoint: any = environment.base_url;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  provincias = provincias

  user:User
  imgUrl: string;

  constructor(private userService:UserService) {
    this.user = userService.user
    if(this.user.img) {
      this.imgUrl = endpoint + '/upload/usuario/' + this.user.img;
    } else {
      this.imgUrl = endpoint + '/upload/usuario/perfil.png';

    }

  }
}
