import { Component } from '@angular/core';

const menuup = [
  {
    title: 'Sport',
    id: 'Sport',
    signe: 'fa fa-plus',
    submenu: [
      {
        title: 'Nike',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'Under Armour',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'Adidas',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'Puma',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'ASICS',
        url: 'assets/images/users/1.jpg',
      },
    ],
  },
  {
    title: 'Hombre',
    id: 'Hombre',
    signe: 'fa fa-plus',
    submenu: [
      {
        title: 'Fendi',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'Guess',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'Valentino',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'Puma',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'ASICS',
        url: 'assets/images/users/1.jpg',
      },
    ],
  },
  {
    title: 'Mujer',
    id: 'Mujer',
    signe: 'fa fa-plus',
    submenu: [
      {
        title: 'Dior',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'Versace',
        url: 'assets/images/users/1.jpg',
      },
      
    ],
  },
  {
    title: 'Sport',
    id: 'Sport',
    signe: 'fa fa-plus',
    submenu: [
      {
        title: 'Nike',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'Under Armour',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'Adidas',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'Puma',
        url: 'assets/images/users/1.jpg',
      },
      {
        title: 'ASICS',
        url: 'assets/images/users/1.jpg',
      },
    ],
  },
  
];
const menubutom = [
  {
    title: 'Infantil',
    id: 'Infantil',
    
  },
  {
    title: 'Fashion',
    id: 'Fashion',
    
  },
  {
    title: 'Hogar',
    id: 'Hogar',
    
  },
  {
    title: 'Interiorismo',
    id: 'Interiorismo',
    
  },
  
];
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuup: any[] = menuup;
  menubutom: any[] = menubutom;
}
