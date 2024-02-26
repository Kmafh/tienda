import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogData } from 'src/app/components/dialog/dialog.component';
import { Forms } from 'src/app/interfaces/form.interface';
import { User } from 'src/app/models/user';
import { BaseService } from 'src/app/services/base/base.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/enviroments/environment';
const endpoint: any = environment.base_url;

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit{
  data: any[] = [];
  currentPage = 1;
  pageSize = 10; // Tamaño de página, ajusta según sea necesario
  loading = false;
  user:User
  showFiller = false;

  constructor(public dialog: MatDialog,
    private baseService: BaseService,
    private userService: UserService
    ) {
      this.userService.user ?this.user = this.userService.user:this.user = JSON.parse(this._user)
      this.setDataDefault()

    }

    async ngOnInit(): Promise<void> {
      
      this.userService.user ?this.user = this.userService.user:this.user = JSON.parse(this._user)
      await this.setData()

    }
  get token(): string {
    return sessionStorage.getItem('token') || '';
  }
  get _user(): string {
    return sessionStorage.getItem('us') || '';
  }
  openDialog(type: string, row?: any): void {
    const data: DialogData = {
      type: type,
      group: Forms.artworkraGroup,
      data: row || null,
    };
    const dialogRef = this.dialog.open(DialogComponent, {
      data: data || null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  async setData() {
    const url:string = `${endpoint}/artwork`
    await this.baseService.getItems(url).subscribe((resp:any) => {
      this.data = resp.artworks;
    })
  }
  async setDataDefault() {
    this.data = [{
      "title": "Vacio",
      "category": "02",
      "price": 333,
      "likes": 0,
      "createAt": "2024-02-20T19:39:27.402Z",
      "active": true,
      "uid": "65820b47e4971e28639f277c",
      "uName": "toni",
      "description": "Nada",
      "img": "64acda36-1dc1-470d-8b0c-61b38ff6178a.jpg",
      "id": "65d4fff1e5f9f44cc0eb5ba0"
  }]
  }
}
