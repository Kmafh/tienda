import { environment } from 'src/enviroments/environment';

const base_url = environment.base_url;
export class Artwork {
  constructor(
    public id: string,
    public title: string,
    public likes: number,
    public category: string,
    public price: number,
    public createAt: Date = new Date(),
    public active: boolean = true,
    public uid: string,
    public uName: string,
    public description: string,
    public img: string,
  ) {}

  get getImgUrl() {
    if (!this.img) {
      return base_url + '/upload/artwork/no-img';
    } else if (this.img.includes('https')) {
      return this.img;
    } else if (this.img) {
      return base_url + '/upload/artwork/' + this.img;
    } else {
      return base_url + '/upload/usuarios/no-img';
    }
  }
}
