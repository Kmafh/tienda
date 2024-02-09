import { environment } from 'src/enviroments/environment';

const base_url = environment.base_url;
export class Artwork {
  constructor(
    public id: string,
    public title: string,
    public likes: number,
    public category: string,
    public stock: number,
    public price: number,
    public createAt: Date = new Date(),
    public active: boolean = true,
    public uid: string,
    public uName: string,
    public description: string,
    public img: string,
    public provincia: string,
    public amount: number
  ) {}

  get getImgUrl() {
    if (!this.img) {
      return base_url + '/upload/usuarios/no-img';
    } else if (this.img.includes('https')) {
      return this.img;
    } else if (this.img) {
      return base_url + '/upload/usuarios/' + this.img;
    } else {
      return base_url + '/upload/usuarios/no-img';
    }
  }
}
