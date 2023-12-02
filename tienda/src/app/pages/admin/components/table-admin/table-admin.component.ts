import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product';
import { UtilsService } from '../../../../services/utils/utils.service';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/enviroments/environment.prod';
const endpoint: any = environment.base_url;


@Component({
  selector: 'app-table-admin',
  templateUrl: './table-admin.component.html',
  styleUrls: ['./table-admin.component.css']
})
export class TableAdminComponent {
  @Input() table: string = 'dentro';
  resp:any
  items!:any
  imgUrl:string;
  constructor( private utilsService: UtilsService) {
  this.imgUrl = endpoint + "/upload/productos/";

  }

  respSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");

  cambiarResp(nuevoValorResp: any) {
    // Cambia el valor de resp
    this.respSubject.next(nuevoValorResp);
  }
  async ngOnInit(): Promise<void> {
    console.log("OnInit - Table: " + this.table);
    switch(this.table) {
      case 'product':
          this.resp = await this.utilsService.getProducts();
          this.items = this.resp
          this.respSubject.subscribe(newResp => {
            // Actualiza items cuando resp cambia
            this.items = newResp;
          });
      
          // Simula un cambio en resp (puedes reemplazar esto con tu lógica real)
          this.cambiarResp(this.resp);
      break;
      case 'provee':
          this.resp = this.utilsService.getProducts();
          this.items = this.resp
      break;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['table']) {
      console.log("Table changed: ", changes['table'].currentValue);
    }
  }
}
