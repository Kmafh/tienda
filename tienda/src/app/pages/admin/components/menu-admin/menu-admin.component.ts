import { Component } from '@angular/core';
import { ResultService } from 'src/app/services/admin/result.service';


const menubutom = [
  {
    title: 'Productos',
    id: 'Productos',
    url: 'product',
    
  },
  {
    title: 'Proveedor',
    id: 'Proveedor',
    url: 'provee',
    
  },
  {
    title: 'Facturas',
    id: 'Hogar',
    url: 'fact',
    
  }
  
];
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {
  menubutom: any[] = menubutom;
constructor(private resultService: ResultService) {}
  setTable(table:string) {
    this.resultService.setTable(table);
  }
}
